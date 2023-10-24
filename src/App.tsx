import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from '../src/components/TodoList'
import CompteurDeClics from '../src/components/Compteur'
import Home from './pages/Home';
import './App.css';
import ProfilUtilisateur from './components/ProfilUtilisateur';
import ListeFilms from './components/ListeFilms';
import MenuHamburger from './components/MenuHamburger';
import RechercheFilms from './components/RechercheFilms';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MenuHamburger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/todolist"
            element={<TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />}
          />
          <Route path="/compteur" element={<CompteurDeClics />} />
          <Route path="/profil/:id" element={<ProfilUtilisateur />} />
          <Route path="/liste_de_films" element={<ListeFilms />} />
          <Route path="/recherche_de_films" element={<RechercheFilms />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
