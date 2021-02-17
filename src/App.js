import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

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
