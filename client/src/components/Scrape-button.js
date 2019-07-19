import React from 'react';

function ScrapeButton(props) {
    
    return (
        <div>
            <button className='btn btn-success' onClick={props.scrape}>Scrape Articles</button>
        </div>
    )

}


export default ScrapeButton;