import logo from './redhat.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [message, setMessage] = useState('');

  function callApi() {
    fetch('http://localhost:8080/backend', { method: 'GET' })
    //.then(response => alert(response.status))
    .then(response => response.text()) // Parsing the data into a JavaScript object
    .then(json => setMessage(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }

  return (
    <div className="App">
      <header className="App-header">      
      <img src={logo} className="App-logo" alt='logo'></img>
        <h1>Welcome to the demo</h1>
        <h2><button onClick={callApi}>Get backend status</button></h2>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;