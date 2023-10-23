import React, { useState, useEffect } from 'react';
import '../style/Compteur.css';

const CompteurDeClics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10000) {
      alert("Vous avez cliqué 10 000 fois!\nBravo vous n'avez pas de vie 🤣");
    }
  }, [count]);

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="cpt-container">
        <p className="cpt-text">Nombre de clics: {count}</p>
        <button className="cpt-btn-click" onClick={() => setCount(count + 1)}>Cliquez-moi</button>
        <button className="cpt-btn-reset" onClick={resetCount}>Réinitialiser</button>
    </div>
  );
}

export default CompteurDeClics;
