import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../style/TodoList.css';
export interface TodoListProps {
  todos: string[];
  addTodo: (newTodo: string) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, addTodo, deleteTodo }) => (
  <div className="todo-container">
    <h1 className="todo-title">Todo</h1>
    <input
      className="todo-input"
      type="text"
      placeholder="Ajouter une tâche"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTodo(e.currentTarget.value);
          e.currentTarget.value = '';
        }
      }}
    />
    <List>
      {todos.map((todo, index) => (
        <ListItem className="todo-list-item" key={index.toString()} disablePadding>
          <ListItemButton>
            <Checkbox className="todo-checkbox" edge="start" tabIndex={-1} disableRipple />
            <ListItemText className="todo-text" primary={todo} />
          </ListItemButton>
          <IconButton
            className="todo-delete-button"
            edge="end"
            aria-label="delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  </div>
);




export default TodoList;
