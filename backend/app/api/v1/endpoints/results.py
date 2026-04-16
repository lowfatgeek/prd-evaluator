from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.services.db_service import get_db
from app.models.db_models import Evaluation, Upload
from app.models.evaluation import ResultResponse

router = APIRouter()

@router.get("/results/{evaluation_id}", response_model=ResultResponse)
async def get_evaluation_result(evaluation_id: str, db: Session = Depends(get_db)):
    evaluation = db.query(Evaluation).filter(Evaluation.id == evaluation_id).first()
    if not evaluation:
        raise HTTPException(status_code=404, detail="Evaluation not found.")

    upload = db.query(Upload).filter(Upload.id == evaluation.upload_id).first()

    response = ResultResponse(
        evaluation_id=str(evaluation.id),
        status=evaluation.status,
    )

    if upload:
        response.filename = upload.filename
        response.file_size = upload.file_size
        response.file_format = upload.file_format

    if evaluation.status == "completed":
        response.evaluated_at = evaluation.completed_at.isoformat() if evaluation.completed_at else None
        response.result = evaluation.result_json
    elif evaluation.status == "failed":
        response.error = evaluation.error_message

    return response
