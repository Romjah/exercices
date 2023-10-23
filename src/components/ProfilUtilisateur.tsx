import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavigationTabs from './NavigationTabs';

interface User {
  name: string;
  email: string;
  avatar: string;
}

const ProfilUtilisateur: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) {
      setError("ID utilisateur non spécifié dans l'URL.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const fetchedUser = data.results[0];
        
        const userData = {
          name: `${fetchedUser.name.first} ${fetchedUser.name.last}`,
          email: fetchedUser.email,
          avatar: fetchedUser.picture.large
        };
        setUser(userData);
      } catch (err) {
        setError("Erreur lors de la récupération des données de l'utilisateur.");
      }
    };

    fetchUserData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Chargement...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={user.avatar} alt="Avatar" style={{ width: '150px', borderRadius: '50%' }} />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <NavigationTabs />
    </div>
  );
}

export default ProfilUtilisateur;
