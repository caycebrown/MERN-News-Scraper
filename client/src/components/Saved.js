import React from 'react';
import SavedArticle from './Saved-Article';

function Saved(props) {

    return(
        <div className="container-fluid">

            {(!props.state) ? <h1>No Articles Have Been Saved</h1> : 
                props.state.map(x => <SavedArticle link={x.link} 
                                              title={x.title} 
                                              text={x.text} 
                                              deleteOne={props.deleteOne}
                                              dbID={x._id}  
                                              id={props.state.indexOf(x)}
                                              key={props.state.indexOf(x)}/>)}
        </div>
    )

}

export default Saved;