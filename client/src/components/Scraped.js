import React from 'react';
import Article from './Article';

function Scraped(props) {

    return(
        <div className="container-fluid">

            {(!props.state) ? <div className='row' id='error'><h2>No Articles Have Been Scraped</h2></div> : 
                props.state.map(x => <Article link={x.link} 
                                              title={x.title} 
                                              text={x.text} 
                                              saveNew={props.saveNew}
                                              id={props.state.indexOf(x)}
                                              key={props.state.indexOf(x)}/>)}
        </div>
    )

}

export default Scraped;