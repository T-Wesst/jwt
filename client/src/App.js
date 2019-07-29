import React from 'react';
import './App.css';
import axios from 'axios';

async function getSignup() {
  axios.get('/users/login').then(response => {
    console.log(response);
  });
}

function App() {
  return (
    <div className="App">
      <button onClick={getSignup} className="App-header">
        JWT App
      </button>
    </div>
  );
}

export default App;
