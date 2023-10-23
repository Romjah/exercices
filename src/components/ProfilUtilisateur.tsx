import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationTabs from './NavigationTabs';
import profilesData from '../json/profil.json';
import '../style/ProfilUtilisateur.css';

interface User {
    name: string;
    email: string;
    avatar: string;
}

const ProfilUtilisateur: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [searchId, setSearchId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const index = parseInt(id, 10) - 1;

            if (!isNaN(index) && index >= 0 && index < profilesData.length) {
                setUser(profilesData[index]);
            } else {
                setUser(null);
            }
        }
    }, [id]);

    const handleSearch = () => {
        if (searchId) {
            navigate(`/profil/${searchId}`);
        }
    };

    return (
        <div className="container">
            <div className="searchBox">
                <input
                    type="number"
                    placeholder="Entrez un ID utilisateur"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handleSearch}>Rechercher</button>
            </div>
            
            {user ? (
                <div className="profile">
                    <img className="profilePic" src={user.avatar} alt="Avatar" />
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <NavigationTabs currentIndex={id ? parseInt(id, 10) - 1 : 0} totalProfiles={profilesData.length} />
                </div>
            ) : (
                <p className="errorMessage">Veuillez spécifier un ID valide.</p>
            )}
        </div>
    );
}

export default ProfilUtilisateur;