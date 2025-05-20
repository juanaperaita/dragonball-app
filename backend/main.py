from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

from get_all_matches import get_all_matches
from io_models import NameRequest, ApiResponse

app = FastAPI()

@app.post("/get_names", response_model=ApiResponse)
def names(request: NameRequest):
    # adjust input name
    processed = request.name.strip().lower()
    
    try: 
        matches = get_all_matches(processed)
    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"External API error {e}")
    
    return ApiResponse(
        original=request.name,
        processed=processed,
        names=matches
    )