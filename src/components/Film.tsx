import React from 'react';
import '../style/Films.css';

interface FilmProps {
    id: number;
    titre: string;
    realisateur: string;
    annee: number;
    description: string;
}

const Film: React.FC<FilmProps> = ({ titre, realisateur, annee, description }) => {
    return (
        <div className="film-item">
            <h2>{titre} ({annee})</h2>
            <p className="realisateur">Réalisé par : {realisateur}</p>
            <p>{description}</p>
        </div>
    );
};

export default Film;
