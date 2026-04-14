import os
import io
from pypdf import PdfReader

def extract_text_from_file(file_bytes: bytes, file_format: str) -> str:
    """Extracts text depending on the file format using in-memory bytes."""
    text_content = ""
    
    try:
        if file_format in ['txt', 'md']:
            text_content = file_bytes.decode('utf-8', errors='ignore')
        elif file_format == 'pdf':
            reader = PdfReader(io.BytesIO(file_bytes))
            for page in reader.pages:
                text_content += page.extract_text() or ""
            
        # Normalize whitespace
        text_content = ' '.join(text_content.split())
        return text_content
    except Exception as e:
        print(f"Error extracting text: {e}")
        return ""

def validate_content_length(text: str) -> bool:
    """Returns True if the content is above the token threshold."""
    return len(text) >= 200
