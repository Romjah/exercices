import React, { useState, useEffect } from 'react';
import MenuHamburger from './MenuHamburger';

const CompteurDeClics = () => {
  // Utilisez useState pour gérer le compteur
  const [count, setCount] = useState(0);

  // Utilisez useEffect pour afficher un message quand le compteur atteint un certain nombre
  useEffect(() => {
    if (count === 10) {
      alert('Vous avez cliqué 10 fois!');
    }
  }, [count]);

  return (
    <div>
        <MenuHamburger />
        <div>
            <button onClick={() => setCount(count + 1)}>Cliquez-moi</button>
            <p>Nombre de clics: {count}</p>
        </div>
    </div>
  );
}

export default CompteurDeClics;
