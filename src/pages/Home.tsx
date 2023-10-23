import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const exerciseRoutes = [
    'todolist',
    'compteur',
    'profil',
    'navigation',
    'liste_de_produit',
    'recherche_de_films',
    'pagination',
    'filter',
  ];

  return (
    <div className="App-header">
      {/* Icône hamburger */}
      <div style={{ position: 'absolute', top: '20px', left: drawerOpen ? '250px' : '20px' }}>
        <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Titre et sous-titre */}
      <div className="home-title">Bienvenue sur Mon Site</div>
      <div className="home-subtitle">Découvrez nos incroyables fonctionnalités!</div>

      {/* Drawer pour la navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {exerciseRoutes.map((exercise, index) => (
            <ListItem key={index} component={Link} to={`/${exercise}`}>
              <ListItemText primary={`Exercice ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Home;
