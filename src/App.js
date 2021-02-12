import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Kara's ToDo List</h1>
      <h2></h2>
      <Form
        inputText={input}
        setInputText={setInput}
        todoList={list}
        setTodoList={setList}
      />
      <List
        inputText={input}
      />
    </div>
  );
}

export default App;
