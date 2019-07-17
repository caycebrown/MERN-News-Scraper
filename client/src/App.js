import React from 'react';
import './App.css';

function App() {

  const handleClick = () => {
    fetch('/api/test')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  return (
    <div>
      <h1>Heres the Start</h1> 
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
