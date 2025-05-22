import { useState } from 'react';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import CharacterModal from './CharacterModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { results, error, searchCharacters } = useCharacterSearch();

  const handleSearch = () => searchCharacters(query);

  return (
    <div>
      <input
        className='select'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe el nombre"
      />
      <button className='btn-custom' onClick={handleSearch}>
        Buscar
      </button>
      
      {error && <p>Error: {error}</p>}
      
      <ul className='search-results'>
        {results.map((character, index) => (
          <li key={index} onClick={() => setSelectedCharacter(character)}>
            {character.name}
          </li>
        ))}
      </ul>
      
      {selectedCharacter && (
        <CharacterModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </div>
  );
};

export default Search;