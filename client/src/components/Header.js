import React from 'react';
import ScrapeButton from '../components/Scrape-button';
require('./Header.css')

function Header(props) {

    return (
    <div className="col" id='header'>
      <h1>MERN NEWS SCRAPER</h1>
      <div className="row" id="buttons">
        <ScrapeButton scrape={props.scrape}/>
        <button className='btn btn-primary' onClick={props.getSaved}>Go to saved articles</button>
        <button className='btn btn-danger' onClick={props.clearAll}>Clear all saved articles</button>
      </div>
    </div>
    )

}

export default Header;