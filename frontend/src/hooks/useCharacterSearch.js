import { useState } from 'react';

export const useCharacterSearch = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const searchCharacters = async (query) => {
    if (!query) return;
   
    setError(null);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_NAMES_API_URL}/get_names`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: query })
      });

      if (!response.ok) throw new Error('Error al obtener resultados');
      
      const data = await response.json();
      setResults(data.names);
    } catch (err) {
      setError(err.message);
    }
  };

  return { results, error, searchCharacters };
};