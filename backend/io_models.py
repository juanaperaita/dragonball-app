from pydantic import BaseModel
from typing import Optional

class NameRequest(BaseModel):
    name: str

class OriginPlanet(BaseModel):
    id: int
    name: str
    isDestroyed: bool
    description: Optional[str] = None
    image: Optional[str] = None
    deletedAt: Optional[str] = None

class Character(BaseModel):
    id: int
    name: str
    ki: Optional[str] = None
    maxKi: Optional[str] = None
    race: Optional[str] = None
    gender: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    affiliation: Optional[str] = None
    deletedAt: Optional[str] = None
    originPlanet: Optional[OriginPlanet] = None

class ApiResponse(BaseModel):
    original: str
    processed: str
    names: list[Character]