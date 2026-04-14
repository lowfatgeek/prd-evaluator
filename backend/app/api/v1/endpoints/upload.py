from fastapi import APIRouter, File, UploadFile, HTTPException, Depends
from sqlalchemy.orm import Session
from app.services.db_service import get_db
from app.models.db_models import Upload
from app.models.evaluation import UploadResponse
import os
import uuid

router = APIRouter()

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB
ALLOWED_EXTENSIONS = {".txt", ".md", ".pdf"}

@router.post("/upload", response_model=UploadResponse)
async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Validate extension
    file_ext = os.path.splitext(file.filename)[1].lower()
    if file_ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Unsupported file format.")

    # Read and validate size
    contents = await file.read()
    file_size = len(contents)
    if file_size > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File too large. Maximum 10MB.")

    from app.services.storage_service import upload_file_to_supabase
    
    # Save file to Supabase Storage
    path_on_storage = upload_file_to_supabase(contents, file.filename)

    # Save to Database
    db_upload = Upload(
        filename=file.filename,
        file_path=path_on_storage,
        file_size=file_size,
        file_format=file_ext.replace(".", "")
    )
    db.add(db_upload)
    db.commit()
    db.refresh(db_upload)

    return UploadResponse(
        upload_id=db_upload.id,
        filename=db_upload.filename,
        file_size=file_size,
        format=db_upload.file_format,
        status="uploaded"
    )
