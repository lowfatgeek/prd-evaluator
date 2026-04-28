import os
from supabase import create_client, Client
from app.core.config import settings
import uuid
from datetime import datetime, timedelta
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.db_models import Upload, Evaluation

# Initialize client only if URL and KEY are set
if settings.SUPABASE_URL and settings.SUPABASE_KEY and not settings.SUPABASE_KEY.startswith("ey_your"):
    supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
else:
    supabase = None
    print("Warning: Supabase credentials are not set. Ensure you update .env for real storage.")

BUCKET_NAME = "prd_documents"

def upload_file_to_supabase(file_bytes: bytes, filename: str) -> str:
    """Uploads a file to Supabase storage and returns its path."""
    if not supabase:
        # Mock logic for local testing backwards compatibility
        upload_dir = "./uploads"
        os.makedirs(upload_dir, exist_ok=True)
        file_ext = os.path.splitext(filename)[1].lower()
        temp_path = os.path.join(upload_dir, f"{str(uuid.uuid4())}{file_ext}")
        with open(temp_path, "wb") as f:
            f.write(file_bytes)
        return temp_path

    # Supabase logic
    try:
        file_ext = os.path.splitext(filename)[1].lower()
        unique_filename = f"{str(uuid.uuid4())}{file_ext}"
        path_on_supase = f"{unique_filename}"
        
        # Determine content type
        content_type = "application/pdf" if file_ext == ".pdf" else "text/plain"
        
        # Upload
        res = supabase.storage.from_(BUCKET_NAME).upload(
            file=file_bytes,
            path=path_on_supase,
            file_options={"content-type": content_type}
        )
        return path_on_supase
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload to Supabase: {str(e)}")

def download_file_from_supabase(path: str) -> bytes:
    """Downloads a file's bytes from Supabase given its path. Reads locally if running Mock."""
    if not supabase:
        if os.path.exists(path):
            with open(path, "rb") as f:
                return f.read()
        else:
            raise FileNotFoundError("Local mock file not found.")
            
    try:
        # Download
        res = supabase.storage.from_(BUCKET_NAME).download(path)
        return res
    except Exception as e:
        # If it fails, check if the file was a leftover mock file
        if os.path.exists(path):
            with open(path, "rb") as f:
                return f.read()
        raise Exception(f"Failed to download from Supabase: {str(e)}")

def delete_file_from_supabase(path: str) -> bool:
    """Deletes a file from Supabase storage."""
    if not supabase:
        # Mock logic: delete local file if it exists
        if os.path.exists(path):
            os.remove(path)
            return True
        return False

    try:
        res = supabase.storage.from_(BUCKET_NAME).remove([path])
        return True
    except Exception as e:
        print(f"Error deleting file from Supabase: {e}")
        return False

def cleanup_old_files(db: Session, hours: int = 24) -> dict:
    """
    Finds and deletes physical files older than specified hours.
    Keeps database records for historical reports.
    """
    threshold = datetime.utcnow() - timedelta(hours=hours)
    
    # 1. Find uploads older than threshold that still have a file_path
    old_uploads = db.query(Upload).filter(
        Upload.created_at < threshold,
        Upload.file_path != None
    ).all()
    
    deleted_count = 0
    errors = []
    
    for upload in old_uploads:
        try:
            # 2. Delete from Storage
            success = delete_file_from_supabase(upload.file_path)
            
            # 3. Clear file_path in DB instead of deleting record
            upload.file_path = None
            
            deleted_count += 1
        except Exception as e:
            errors.append(f"Failed to delete file for upload {upload.id}: {str(e)}")
            
    db.commit()
    
    return {
        "deleted_count": deleted_count,
        "errors": errors
    }
