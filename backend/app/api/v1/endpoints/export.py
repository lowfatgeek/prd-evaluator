from fastapi import APIRouter, HTTPException, Depends
from fastapi.responses import Response
from sqlalchemy.orm import Session
from app.services.db_service import get_db
from app.models.db_models import Evaluation, Upload
from app.services.pdf_service import generate_pdf_report
from datetime import datetime

router = APIRouter()

@router.get("/export/{evaluation_id}/pdf")
async def export_pdf(evaluation_id: str, db: Session = Depends(get_db)):
    evaluation = db.query(Evaluation).filter(Evaluation.id == evaluation_id).first()
    if not evaluation:
        raise HTTPException(status_code=404, detail="Evaluation not found.")

    if evaluation.status != "completed":
        raise HTTPException(status_code=400, detail="Evaluation is not completed yet.")

    upload = db.query(Upload).filter(Upload.id == evaluation.upload_id).first()
    filename = upload.filename if upload else "Unknown"

    evaluation_data = {
        "result_json": evaluation.result_json,
    }

    try:
        pdf_bytes = generate_pdf_report(evaluation_data, filename)
        
        # Format date for filename
        date_str = datetime.utcnow().strftime("%Y%m%d")
        export_filename = f"PRD_Evaluation_Report_{date_str}.pdf"

        return Response(
            content=pdf_bytes,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename=\"{export_filename}\""
            }
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Failed to generate PDF: {str(e)}")
