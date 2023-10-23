import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <button disabled={currentIndex === 0} onClick={handlePrevious}>
        Précédent
      </button>
      <button disabled={currentIndex === totalProfiles - 1} onClick={handleNext}>
        Suivant
      </button>
    </div>
  );
};

export default NavigationTabs;
