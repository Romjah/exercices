import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from '../src/components/TodoList'
import CompteurDeClics from '../src/components/Compteur'
import Home from './pages/Home';
import './App.css';
import ProfilUtilisateur from './components/ProfilUtilisateur';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  // Fonction pour ajouter une tâche
  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  // Fonction pour supprimer une tâche par son index
  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/todolist"
            element={<TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />}
          />
          <Route path="/compteur" element={<CompteurDeClics />} />
          <Route path="/profil/:id" element={<ProfilUtilisateur />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
