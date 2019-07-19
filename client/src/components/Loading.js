import React from 'react';
require('./Loading.css');


function Loading() {
    return (
        <div className='col loader'>
            <div className='row'>
                <h2>Scraping Articles</h2>
            </div>
            <div className='row'>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
