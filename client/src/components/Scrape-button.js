import React from 'react';
import { Link } from 'react-router-dom';

function ScrapeButton(props) {
    
    return (
        <div>
            <Link to='/'><button className='btn btn-success' onClick={props.scrape}>Scrape Articles</button></Link>
        </div>
    )

}


export default ScrapeButton;