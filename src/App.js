import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Kara's ToDo List</h1>
      <h2></h2>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todos}
        setTodoList={setTodos}
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
