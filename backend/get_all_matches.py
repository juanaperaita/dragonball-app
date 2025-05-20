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
    filtered: list[str]=[]
    extracted_names: list[str]=[]

    for char in all_chars:
        name = char.get("name")
        if name is not None and name !="":
            extracted_names.append(name)
    
    for name in extracted_names:
        lower_case_name = name.lower()
        starts = lower_case_name.startswith(normalized_substr_or_name)
        ends = lower_case_name.endswith(normalized_substr_or_name)
        contains = normalized_substr_or_name in lower_case_name

        if starts or ends or contains:
            filtered.append(name)
    return filtered