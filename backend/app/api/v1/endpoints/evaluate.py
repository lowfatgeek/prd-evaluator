from fastapi import APIRouter, HTTPException, Depends, BackgroundTasks
from sqlalchemy.orm import Session
from app.services.db_service import get_db, SessionLocal
from app.models.db_models import Upload, Evaluation
from app.models.evaluation import EvaluateRequest, EvaluateResponse
from app.services.parser_service import extract_text_from_file, validate_content_length
from app.services.ai_service import evaluate_prd_text
from datetime import datetime

router = APIRouter()

async def run_evaluation_task(evaluation_id: str, upload_path: str, file_format: str, output_language: str):
    # This runs in background
    db = SessionLocal()
    evaluation = db.query(Evaluation).filter(Evaluation.id == evaluation_id).first()
    
    if not evaluation:
        db.close()
        return

    from app.services.storage_service import download_file_from_supabase
    
    try:
        # Download bytes
        file_bytes = download_file_from_supabase(upload_path)
        
        # Extra text
        text = extract_text_from_file(file_bytes, file_format)
        
        if not validate_content_length(text):
            evaluation.status = "failed"
            evaluation.error_message = "Document content is too short for validation."
            db.commit()
            db.close()
            return
            
        # AI evaluation
        ai_result = await evaluate_prd_text(text, output_language=output_language)
        
        if "error" in ai_result:
            evaluation.status = "failed"
            evaluation.error_message = ai_result["error"]
        else:
            evaluation.status = "completed"
            evaluation.final_score = ai_result.get("final_score", 0)
            evaluation.verdict = ai_result.get("verdict", "Unknown")
            evaluation.result_json = ai_result
            
        evaluation.completed_at = datetime.utcnow()
        db.commit()
    except Exception as e:
        evaluation.status = "failed"
        evaluation.error_message = str(e)
        evaluation.completed_at = datetime.utcnow()
        db.commit()
    finally:
        db.close()

@router.post("/evaluate", response_model=EvaluateResponse, status_code=202)
async def evaluate_document(req: EvaluateRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    upload = db.query(Upload).filter(Upload.id == req.upload_id).first()
    if not upload:
        raise HTTPException(status_code=404, detail="Upload not found.")

    # Check for existing evaluation
    existing = db.query(Evaluation).filter(Evaluation.upload_id == req.upload_id).first()
    if existing and existing.status in ["processing", "completed"]:
        return EvaluateResponse(
            evaluation_id=str(existing.id),
            status=existing.status,
            estimated_time_seconds=30
        )

    # Create new evaluation record
    evaluation = Evaluation(upload_id=upload.id, status="processing", output_language=req.output_language)
    db.add(evaluation)
    db.commit()
    db.refresh(evaluation)

    # enqueue background task
    background_tasks.add_task(run_evaluation_task, evaluation.id, upload.file_path, upload.file_format, req.output_language)

    return EvaluateResponse(
        evaluation_id=str(evaluation.id),
        status="processing",
        estimated_time_seconds=30
    )
