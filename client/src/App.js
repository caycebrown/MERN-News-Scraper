import React from 'react';
import './App.css';
import ScrapeButton from './components/Scrape-button';



function App() {

  //Method for scraping new articles
  const handleClick = () => {
    fetch('/api/scrape')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Method for retrieving saved articles from DB
  const getSaved = () => {
    fetch('/api/saved-articles')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Method For Saving Articles to DB
  const saveNew = () => {
    var options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({title: 'testy mcdude', link: 'somelink.com'})
    };

    fetch('/api/save', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Delete Method
  const clearAll = () => {
    fetch('/api/clear')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  return (
    <div>
      <h1>Heres the Start</h1> 
      <ScrapeButton onClick={handleClick} />
      <button onClick={getSaved}>Get Saved</button>
      <button onClick={saveNew}>Save Article</button>
      <button onClick={clearAll}>Clear Articles</button>
    </div>
  );
}

export default App;
