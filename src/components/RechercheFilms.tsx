import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import recherche_styles from '../style/RechercheFilms.module.css';

const RechercheFilms: React.FC = () => {
    const [query, setQuery] = useState("");
    const [films, setFilms] = useState([]);
    const [description, setDescription] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const fetchFilms = useCallback(async (q: string) => {
        const response = await fetch(`http://localhost:5001/search?query=${q}`);
        const data = await response.json();
        console.log("Data reçue:", data);
        setFilms(data.results);
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
            fetchFilms(q);
        }
    }, [location.search, fetchFilms]);

    const handleSearch = () => {
        navigate(`/recherche_de_films?q=${query}`);
    };

    const handleDescriptionClick = (desc: string) => {
        setDescription(desc);
    };

    const handleCloseDescription = () => {
        setDescription(null);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Rechercher un film..." 
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Rechercher</button>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Langue originale</th>
                            <th>Date de sortie</th>
                            <th>Vote moyen</th>
                            <th>Nombre de votes</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map((movie: any) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.original_language}</td>
                                <td>{movie.release_date}</td>
                                <td>{movie.vote_average}</td>
                                <td>{movie.vote_count}</td>
                                <td><button onClick={() => handleDescriptionClick(movie.overview)}>Description</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Popup pour la description */}
            {description && (
                <div className="overlay">
                    <div className="description-popup show">
                        <p>{description}</p>
                        <button onClick={handleCloseDescription}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RechercheFilms;
