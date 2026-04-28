from fastapi import APIRouter, Depends, HTTPException, Header, Query
from sqlalchemy.orm import Session
from app.services.db_service import get_db
from app.services.storage_service import cleanup_old_files
from app.core.config import settings

router = APIRouter()

@router.get("/cleanup")
async def run_cleanup(
    hours: int = Query(24, description="Delete files older than this many hours"),
    x_cron_token: str = Header(None, alias="X-Cron-Token"),
    db: Session = Depends(get_db)
):
    """
    Endpoint to trigger storage and database cleanup.
    Requires X-Cron-Token header for security.
    """
    # Security Check
    if not x_cron_token or x_cron_token != settings.CRON_SECRET_KEY:
        raise HTTPException(
            status_code=401, 
            detail="Unauthorized: Invalid or missing Cron Secret Key."
        )

    try:
        result = cleanup_old_files(db, hours=hours)
        return {
            "status": "success",
            "message": f"Cleanup completed. Deleted {result['deleted_count']} items.",
            "details": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
