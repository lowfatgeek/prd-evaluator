// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export async function uploadDocument(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/api/v1/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Failed to upload document');
  }

  const data = await res.json();
  return data.upload_id;
}

export async function startEvaluation(uploadId: string, outputLanguage: string = 'en'): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/v1/evaluate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ upload_id: uploadId, output_language: outputLanguage }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Failed to start evaluation');
  }

  const data = await res.json();
  return data.evaluation_id;
}

export async function getEvaluationResult(evaluationId: string): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/api/v1/results/${evaluationId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch results');
    }
    return res.json();
}

export function getExportPdfUrl(evaluationId: string): string {
    return `${API_BASE_URL}/api/v1/export/${evaluationId}/pdf`;
}
