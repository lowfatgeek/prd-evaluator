import httpx
import json
import asyncio
from app.core.config import settings

MOCK_RESPONSE = {
    "category_scores": {
        "product_clarity": {"score": 9, "explanation": "Clear definition.", "evidence": "See intro."},
        "user_understanding": {"score": 8, "explanation": "Good personas.", "evidence": "Section 2."},
        "feature_definition": {"score": 8, "explanation": "Detailed.", "evidence": "Section 3."},
        "ai_design": {"score": 7, "explanation": "Applicable AI models stated.", "evidence": "Section 4.", "applicable": True},
        "technical_architecture": {"score": 8, "explanation": "Tech stack clear.", "evidence": "Section 5."},
        "product_viability": {"score": 6, "explanation": "Pricing missing.", "evidence": ""},
        "execution_readiness": {"score": 8, "explanation": "Roadmap is good.", "evidence": "Timeline section."},
        "user_flow": {"score": 8, "explanation": "A bit abstract but covers core.", "evidence": "Flow diagram."},
        "non_functional_requirements": {"score": 7, "explanation": "Mentions scale but no metrics.", "evidence": "NFR section."}
    },
    "strengths": ["Robust technical definition.", "Exceptional user persona mapping."],
    "weaknesses": ["Vague data retention policy.", "Missing success metrics."],
    "missing_sections": ["Monetization / Pricing"],
    "improvement_suggestions": ["Add pricing model.", "Clarify SLAs."]
}

BASE_SYSTEM_PROMPT = """
You are an expert Product Manager and Technical Reviewer specialized in evaluating Product Requirements Documents (PRDs).

Your task is to evaluate a PRD document objectively and produce a structured evaluation report.

IMPORTANT RULES:
1. Your evaluation MUST be based ONLY on the content provided in the PRD.
2. Do NOT invent missing information.
3. If a section is not found, explicitly state "Not found in document".
4. Scores must be consistent and justified.
5. Every score must include a clear explanation.
6. Always mention whether supporting evidence exists in the document.

The PRD must be evaluated using the following 9 categories:
1. Product Clarity
2. User Understanding
3. Feature Definition
4. AI Design
5. Technical Architecture
6. Product Viability
7. Execution Readiness
8. User Flow
9. Non-functional Requirements

Each category must receive a score from 1 to 10.

SCORING GUIDELINES:
Score 1-3: Very weak. The section is missing or extremely unclear.
Score 4-5: Present but incomplete or vague.
Score 6-7: Adequate but lacking depth or detail.
Score 8-9: Strong and clearly described.
Score 10: Exceptional clarity, completeness, and technical detail.

CATEGORY EVALUATION CRITERIA:

Product Clarity
Evaluate whether the PRD clearly explains:
- problem statement
- product description
- value proposition

User Understanding
Evaluate whether the document identifies:
- target users
- user needs
- user stories or personas

Feature Definition
Evaluate whether core features are clearly defined with:
- feature name
- feature description
- acceptance criteria or scope

AI Design
Evaluate whether AI architecture or AI functionality is described (if relevant):
- AI model or engine used
- AI input/output
- AI integration method

Technical Architecture
Evaluate whether technical stack, architecture, or system design is described:
- frontend/backend technology
- database
- infrastructure or deployment

Product Viability
Evaluate whether business feasibility is discussed:
- monetization model
- pricing
- cost awareness
- sustainability or growth potential

Execution Readiness
Evaluate whether the PRD is ready for development:
- roadmap with timeline
- MVP definition
- feature prioritization
- implementation planning

User Flow
Evaluate whether the user journey or workflow is clearly defined:
- step-by-step user flow
- alternative flows
- error states

Non-functional Requirements
Evaluate whether the PRD discusses:
- performance targets
- security requirements
- scalability plan
- reliability or uptime targets

MANDATORY SCORING RULES (hard caps):
- If technical stack is not mentioned -> Technical Architecture score MUST be <= 4.
- If roadmap or MVP is missing -> Execution Readiness score MUST be <= 4.
- If pricing or monetization is missing -> Product Viability score MUST be <= 6.
- If user flow is not described -> User Flow score MUST be <= 5.
- If non-functional requirements are missing -> Non-functional score MUST be <= 5.

OUTPUT FORMAT (STRICT JSON):
{{
  "category_scores": {{
    "product_clarity": {{ "score": 0, "explanation": "", "evidence": "" }},
    "user_understanding": {{ "score": 0, "explanation": "", "evidence": "" }},
    "feature_definition": {{ "score": 0, "explanation": "", "evidence": "" }},
    "ai_design": {{ "score": 0, "explanation": "", "evidence": "", "applicable": true }},
    "technical_architecture": {{ "score": 0, "explanation": "", "evidence": "" }},
    "product_viability": {{ "score": 0, "explanation": "", "evidence": "" }},
    "execution_readiness": {{ "score": 0, "explanation": "", "evidence": "" }},
    "user_flow": {{ "score": 0, "explanation": "", "evidence": "" }},
    "non_functional_requirements": {{ "score": 0, "explanation": "", "evidence": "" }}
  }},
  "strengths": ["", "", ""],
  "weaknesses": ["", "", ""],
  "missing_sections": [""],
  "improvement_suggestions": ["", "", ""]
}}

Return ONLY valid JSON. Do not add any text or explanation outside the JSON object.
JSON keys MUST remain exactly as specified above in English. Never translate the keys.
{language_instruction}
"""

LANGUAGE_MAP = {
    "en": "English",
    "id": "Indonesian",
    "ms": "Malay",
    "ja": "Japanese",
    "ko": "Korean",
    "zh": "Chinese",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "ru": "Russian",
    "pt": "Portuguese",
    "it": "Italian",
    "ar": "Arabic",
    "hi": "Hindi",
    "vi": "Vietnamese"
}

def build_system_prompt(output_language: str = "en") -> str:
    """Builds the system prompt, injecting language instructions when needed."""
    lang_name = LANGUAGE_MAP.get(output_language, "English")
    if output_language != "en":
        language_instruction = f"""\nCRITICAL LANGUAGE REQUIREMENT:
You MUST write ALL text values in {lang_name}.
This applies to: "explanation", "evidence", every string in "strengths", "weaknesses", "missing_sections", and "improvement_suggestions".
The JSON keys stay in English. Only the text content values must be in {lang_name}.
Example for {lang_name}:
"explanation": "<your explanation written in {lang_name}>"
"evidence": "<your evidence written in {lang_name}>"
"strengths": ["<strength in {lang_name}>", "<strength in {lang_name}>"]"""
    else:
        language_instruction = ""
    return BASE_SYSTEM_PROMPT.format(language_instruction=language_instruction)

def generate_user_prompt(text: str, output_language: str = "en") -> str:
    lang_name = LANGUAGE_MAP.get(output_language, "English")

    # Language reminder placed AFTER the document content — this is the last thing
    # the model reads before generating, making it far more effective.
    lang_reminder = ""
    if output_language != "en":
        lang_reminder = f"""\n\nREMINDER: You MUST write all explanation, evidence, strengths, weaknesses, missing_sections, and improvement_suggestions text values in {lang_name}. Do NOT use English for these values. Use {lang_name} only."""

    return f"""Evaluate the following PRD document.

PRD CONTENT:
\"\"\"
{text[:15000]}
\"\"\"
{lang_reminder}"""

def compute_final_score_and_verdict(result_json: dict) -> dict:
    if not isinstance(result_json, dict):
        return {"error": "AI returned invalid data format."}
        
    categories = result_json.get("category_scores", {})
    if not isinstance(categories, dict):
        categories = {}
        
    scores = []
    
    for key, value in categories.items():
        # Ensure value is a dict before calling .get()
        if not isinstance(value, dict):
            # If AI returned a string for a category, convert it to a dict with 0 score
            value = {"score": 0, "explanation": str(value), "evidence": "Not found"}
            categories[key] = value

        if key == "ai_design":
            applicable = value.get("applicable", True)
            if applicable is False or str(applicable).lower() == "false":
                value["score"] = None
                if not value.get("explanation"):
                    value["explanation"] = "No AI component detected in this PRD."
            else:
                score = value.get("score")
                scores.append(score if score is not None else 0)
        else:
            score = value.get("score", 0)
            scores.append(score if score is not None else 0)
            
    if scores:
        final_score = round(sum(scores) / len(scores), 1)
    else:
        final_score = 0
        
    if final_score < 4.0:
        verdict = "Very Weak"
    elif final_score < 6.0:
        verdict = "Early Draft"
    elif final_score < 7.5:
        verdict = "Good Draft"
    elif final_score < 8.5:
        verdict = "Strong PRD"
    else:
        verdict = "Development Ready"
        
    result_json["final_score"] = final_score
    result_json["verdict"] = verdict
    return result_json

async def evaluate_prd_text(text: str, output_language: str = "en") -> dict:
    """Evaluates the PRD text using OpenRouter API, or mocks it if no key is found."""
    if not settings.OPENROUTER_API_KEY or settings.OPENROUTER_API_KEY.startswith("sk-or-your-api-key"):
        print("Using MOCK AI Response...")
        await asyncio.sleep(2)  # Simulate network latency
        # Need to deepcopy to avoid mutating global MOCK_RESPONSE
        mock_copy = json.loads(json.dumps(MOCK_RESPONSE))
        mock_copy["model_used"] = "Mock-Engine-v1"
        mock_copy["tokens_used"] = 4042
        return compute_final_score_and_verdict(mock_copy)

    headers = {
        "Authorization": f"Bearer {settings.OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000"
    }

    user_prompt = generate_user_prompt(text, output_language)

    payload = {
        "model": settings.OPENROUTER_MODEL,
        "response_format": {"type": "json_object"},
        "messages": [
            {"role": "system", "content": build_system_prompt(output_language)},
            {"role": "user", "content": user_prompt}
        ],
        "temperature": 0.2
    }

    try:
        async with httpx.AsyncClient(timeout=150.0) as client:
            response = await client.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload)
            if response.status_code != 200:
                error_body = response.text
                print(f"OpenRouter Raw Error [HTTP {response.status_code}]: {error_body}")
                response.raise_for_status()
                
            data = response.json()
            if not isinstance(data, dict):
                return {"error": "Invalid response format from OpenRouter."}

            choices = data.get('choices', [])
            if not choices:
                return {"error": "AI returned no choices."}

            content = choices[0]['message']['content']
            parsed_json = json.loads(content)
            
            if not isinstance(parsed_json, dict):
                return {"error": "AI output is not a valid JSON object."}
            
            parsed_json["model_used"] = data.get("model", settings.OPENROUTER_MODEL)
            usage = data.get("usage", {})
            if isinstance(usage, dict):
                parsed_json["tokens_used"] = usage.get("total_tokens", 0)
            else:
                parsed_json["tokens_used"] = 0
            
            return compute_final_score_and_verdict(parsed_json)
    except Exception as e:
        print(f"Error calling AI API: {e}")
        return {"error": str(e)}
