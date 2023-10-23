// Film.tsx
import React from 'react';

interface FilmProps {
  titre: string;
  realisateur: string;
  annee: number;
}

const Film: React.FC<FilmProps> = ({ titre, realisateur, annee }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '16px', padding: '16px', borderRadius: '8px' }}>
      <h2>{titre}</h2>
      <p>Réalisé par: <strong>{realisateur}</strong></p>
      <p>Année: <strong>{annee}</strong></p>
    </div>
  );
};

export default Film;
