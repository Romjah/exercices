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
    { number: 1, path: 'todolist', name: 'Todo List' },
    { number: 2, path: 'compteur', name: 'Compteur' },
    { number: 3, path: 'profil/:id', name: 'Profil Utilisateur' },
    { number: 5, path: 'liste_de_films', name: 'Liste de Films' },
    { number: 6, path: 'recherche_de_films', name: 'Recherche de Films' },
    { number: 7, path: 'pagination', name: 'Pagination' },
    { number: 8, path: 'filter', name: 'Filter' },
  ];

  return (
    <div style={{ position: 'absolute', top: '20px', left: drawerOpen ? '250px' : '20px' }}>
      <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {exerciseRoutes.map((exercise) => (
            <ListItem key={exercise.number} component={Link} to={`/${exercise.path}`}>
              <ListItemText primary={`Exercice ${exercise.number}: ${exercise.name}`} />
            </ListItem>
          ))}
          {/* Note pour l'exercice 4 qui est utilisé dans l'exercice 3 */}
          <ListItem>
            <ListItemText primary="Note: L'Exercice 4 est utilisé dans l'Exercice 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MenuHamburger;
