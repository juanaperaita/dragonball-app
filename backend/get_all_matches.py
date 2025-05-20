import requests
from typing import List, Dict
from dotenv import load_dotenv
from pathlib import Path
import os

dotenv_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=dotenv_path)
BASE_URL = os.getenv("BASE_URL")


def get_all_matches(name_or_substring: str) -> List[Dict]:
    url = f"{BASE_URL}/characters"
    params = {"name": name_or_substring}
    resp = requests.get(url, params=params)
    resp.raise_for_status()
    all_chars = resp.json()
    
    normalized_substr_or_name = name_or_substring.lower()
    filtered: List[Dict] = []

    for char in all_chars:
        name = char.get("name", "").lower()
        if name.startswith(normalized_substr_or_name) or name.endswith(normalized_substr_or_name) or normalized_substr_or_name in name:
            filtered.append(char)
    return filtered