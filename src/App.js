import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  //State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions, Events
  //switch/case event for filter
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Kara's Practice Todo App</h1>
        <h2>Powered by React</h2>
      </div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todos}
        setTodoList={setTodos}
        setStatus={setStatus}
      />
      <List
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
