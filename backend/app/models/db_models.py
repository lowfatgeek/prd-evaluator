import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Text, DateTime, ForeignKey, Enum, Float, JSON
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Upload(Base):
    __tablename__ = "uploads"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    filename = Column(String(255), nullable=False)
    file_path = Column(Text, nullable=True)
    file_size = Column(Integer, nullable=False)
    file_format = Column(String(10), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    ip_address = Column(String(45), nullable=True)

class Evaluation(Base):
    __tablename__ = "evaluations"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    upload_id = Column(String(36), ForeignKey("uploads.id"), nullable=False)
    status = Column(String(50), default="pending") # pending, processing, completed, failed
    final_score = Column(Float, nullable=True)
    verdict = Column(String(50), nullable=True)
    result_json = Column(JSON, nullable=True)
    ai_model_used = Column(String(100), nullable=True)
    tokens_used = Column(Integer, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    error_message = Column(Text, nullable=True)
    output_language = Column(String(5), default="en")
