import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavigationTabs from './NavigationTabs';
import profilesData from '../json/profil.json';

interface User {
  name: string;
  email: string;
  avatar: string;
}

const ProfilUtilisateur: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Initialiser avec 0

  useEffect(() => {
    if (!id) {
      setError("ID utilisateur non spécifié dans l'URL.");
      return;
    }
  
    const index = parseInt(id, 10) - 1;
  
    if (!isNaN(index)) {
      setCurrentIndex(index);
  
      const userProfile = profilesData[index];
  
      if (userProfile) {
        setUser(userProfile);
      } else {
        setError("Profil non trouvé.");
      }
    } else {
      setError("ID utilisateur invalide.");
    }
  }, [id]);
  
  if (error) return <p>{error}</p>;
  if (!user) return <p>Chargement...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={user.avatar} alt="Avatar" style={{ width: '150px', borderRadius: '50%' }} />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <NavigationTabs currentIndex={currentIndex} totalProfiles={profilesData.length} />
    </div>
  );
}

export default ProfilUtilisateur;
