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
      <Form setInputText={setInput} />
      <List />
    </div>
  );
}

export default App;
