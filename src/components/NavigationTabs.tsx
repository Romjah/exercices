import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/NaviguationTabs.css';

interface NavigationTabsProps {
  currentIndex: number;
  totalProfiles: number;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ currentIndex, totalProfiles }) => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/profil/${currentIndex}`); // Naviguer vers l'ID précédent
    }
  };

  const handleNext = () => {
    if (currentIndex < totalProfiles - 1) {
      navigate(`/profil/${currentIndex + 2}`); // Naviguer vers l'ID suivant
    }
  };

  return (
    <div className="navigationTabsContainer">
      <button className="navigationTabButton" disabled={currentIndex === 0} onClick={handlePrevious}>
        Précédent
      </button>
      <button className="navigationTabButton" disabled={currentIndex === totalProfiles - 1} onClick={handleNext}>
        Suivant
      </button>
    </div>
  );  
};

export default NavigationTabs;
