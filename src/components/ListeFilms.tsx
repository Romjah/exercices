import React from 'react';
import filmsData from '../json/films.json';
import Film from './Film';
import '../style/Films.css';

const ListeFilms: React.FC = () => {
  return (
    <div className="liste-films">
      <h1>Liste de Films</h1>
      {filmsData.map((film) => (
        <Film key={film.id} titre={film.titre} realisateur={film.realisateur} annee={film.annee} description={film.description} id={0} />
      ))}
    </div>
  );
};

export default ListeFilms;
