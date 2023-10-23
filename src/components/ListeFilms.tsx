// ListeFilms.tsx
import React from 'react';
import filmsData from '../json/films.json';
import Film from './Film';

const ListeFilms: React.FC = () => {
  return (
    <div>
      <h1>Liste de Films</h1>
      {filmsData.map((film) => (
        <Film key={film.id} titre={film.titre} realisateur={film.realisateur} annee={film.annee} />
      ))}
    </div>
  );
};

export default ListeFilms;
