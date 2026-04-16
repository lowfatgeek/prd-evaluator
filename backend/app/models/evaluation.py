from pydantic import BaseModel
from typing import Optional, Dict, Any

class UploadResponse(BaseModel):
    upload_id: str
    filename: str
    file_size: int
    format: str
    status: str

class EvaluateRequest(BaseModel):
    upload_id: str
    output_language: Optional[str] = "en"

class EvaluateResponse(BaseModel):
    evaluation_id: str
    status: str
    estimated_time_seconds: int

class ResultResponse(BaseModel):
    evaluation_id: str
    status: str
    filename: Optional[str] = None
    file_size: Optional[int] = None
    file_format: Optional[str] = None
    evaluated_at: Optional[str] = None
    result: Optional[Dict[str, Any]] = None
    error: Optional[str] = None
