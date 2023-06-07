
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';

const todoList = [
    {
        id: 1,
        title: 'one'
    },
    {   id: 2,
        title: 'two'


    {   id: 3,
        title: 'three'
    }
    ];
function App() {
  return (
    <div className="App">
      <h1> Todo List:</h1>

        <TodoList />
        <AddTodoForm />
      
    </div>
  );
};
