import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/RechercheFilms.module.css';

const RechercheFilms: React.FC = () => {
    const [query, setQuery] = useState("");
    const [films, setFilms] = useState([]);
    const [description, setDescription] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 6;
    
    const fetchFilms = useCallback(async (q: string, page: number) => {
        const response = await fetch(`http://localhost:5001/search?query=${q}&page=${page}`);
        const data = await response.json();
        console.log("Data reçue:", data);
        setFilms(data.results);
        setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE)); // Assumer que l'API renvoie un total de films pour cette requête
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const q = searchParams.get('q');
        const page = parseInt(searchParams.get('page') || '1', 10); // Pour la pagination
        setCurrentPage(page); // Pour la pagination
        if (q) {
            setQuery(q);
            fetchFilms(q, page);
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

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            navigate(`/recherche_de_films?q=${query}&page=${currentPage + 1}`);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            navigate(`/recherche_de_films?q=${query}&page=${currentPage - 1}`);
        }
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
            <div className="pagination-controls">
                <button disabled={currentPage === 1} onClick={handlePreviousPage}>Page précédente</button>
                <span>Page {currentPage} sur {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={handleNextPage}>Page suivante</button>
            </div>
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
