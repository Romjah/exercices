import React from 'react';
import MenuHamburger from '../components/MenuHamburger'; // 1. Importez le composant MenuHamburger

const Home = () => {
  return (
    <div className="App-header">
      <MenuHamburger />  {/* 2. Utilisez le composant MenuHamburger ici */}

      {/* Titre et sous-titre */}
      <div className="home-title">Bienvenue sur Mon Site</div>
      <div className="home-subtitle">Découvrez nos incroyables fonctionnalités!</div>
    </div>
  );
};

export default Home;
