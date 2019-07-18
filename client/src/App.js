import React from 'react';
import './App.css';
import ScrapeButton from './components/Scrape-button';



function App() {

  const handleClick = () => {
    fetch('/api/scrape')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  return (
    <div>
      <h1>Heres the Start</h1> 
      <ScrapeButton onClick={handleClick} />
    </div>
  );
}

export default App;
