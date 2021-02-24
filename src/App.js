import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  //State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when app starts
  useEffect(() => {
    getLocalTodos()
  },[])
  //useEffects
  useEffect(() => {
    handleFilter()
    saveLocalTodos()
  },[todos, status])

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

  //Save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);  
    }
  }

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
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
