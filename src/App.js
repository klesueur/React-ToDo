import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  

  return (
    <div className="App">
      <h1>Kara's ToDo List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
