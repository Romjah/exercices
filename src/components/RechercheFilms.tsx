import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/RechercheFilms.module.css';

const RechercheFilms: React.FC = () => {
    const [query, setQuery] = useState("");
    const [films, setFilms] = useState([]);
    const [description, setDescription] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const fetchFilms = useCallback(async (q: string) => {
        const response = await fetch(`http://localhost:5001/search?query=${q}`);
        const data = await response.json();
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
                            <th>Auteur</th>
                            <th>Date de publication</th>
                            <th>Acteurs</th>
                            <th>Revenu généré</th>
                            <th>Top vente</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map((film: any) => (
                            <tr key={film.id}>
                                <td>{film.title}</td>
                                <td>{film.author || "N/A"}</td> {/* Ici pour l'auteur */}
                                <td>{film.release_date}</td>
                                <td>{film.actors?.join(', ') || "N/A"}</td> {/* Ici pour les acteurs */}
                                <td>{film.income || "N/A"}</td>
                                <td>{film.reviews || "N/A"}</td>
                                <td><button onClick={() => handleDescriptionClick(film.overview)}>Description</button></td>
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
