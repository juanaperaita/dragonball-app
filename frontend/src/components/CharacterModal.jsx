import React, {useState, useEffect} from 'react';
import '../styles.css';

const CharacterModal = ({ character, onClose }) => {

    if (!character) return null;
    return (
        <div 
            className="modal-overlay"
            onClick={onClose}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
                className="close-button"
                onClick={onClose}>Cerrar
            </button>
            <h2>
                {character.name}
            </h2>
            <img 
                src={character.image}
                alt={character.name}
                className="modal-image"
            />
            <p>
                <strong>Raza:</strong> 
                {character.race}
            </p>
            <p>
                <strong>Género:</strong> 
                {character.gender}
            </p>
            <p>
                <strong>Ki:</strong> 
                {character.ki}
            </p>
            <p>
                <strong>Max Ki:</strong> 
                {character.maxKi}
            </p>
            <p>
                <strong>Afiliación:</strong> 
                {character.affiliation}
            </p>
            <p>
                <strong>Descripción:</strong> 
                {character.description}
            </p>
            {character.originPlanet && (
              <div>
                <h3>Planeta de Origen: 
                    {character.originPlanet.name}
                </h3>
                <p>
                    {character.originPlanet.description}
                </p>
                <img 
                    src={character.originPlanet.image}
                    alt={character.originPlanet.name}
                />
              </div>
            )}
          </div>
        </div>
      );
    };
    
export default CharacterModal;