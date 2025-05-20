from pydantic import BaseModel

class NameRequest(BaseModel):
    name: str

class ApiResponse(BaseModel):
    original: str
    processed: str
    names: list[str]