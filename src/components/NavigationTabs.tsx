import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationTabs: React.FC = () => {
  const location = useLocation();
  const currentID = parseInt(location.pathname.split('/')[2]);

  return (
    <div>
      {/* Bouton de profil précédent (diminue l'ID de 1) */}
      <Link to={`/profil/${currentID - 1}`}>
        <button>Profil Précédent</button>
      </Link>

      {/* Bouton de profil suivant (augmente l'ID de 1) */}
      <Link to={`/profil/${currentID + 1}`}>
        <button>Profil Suivant</button>
      </Link>
    </div>
  );
};

export default NavigationTabs;
