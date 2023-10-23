import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuHamburger = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const exerciseRoutes = [
    'todolist',
    'compteur',
    'profil/:id',
    'liste_de_produit',
    'recherche_de_films',
    'pagination',
    'filter',
  ];

  return (
    <div style={{ position: 'absolute', top: '20px', left: drawerOpen ? '250px' : '20px' }}>
      <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
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

export default MenuHamburger;
