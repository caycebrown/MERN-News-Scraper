import React from 'react';
import SavedArticle from './Saved-Article';

function Saved(props) {

    return(
        <div className="container-fluid">

            {(!props.state || props.state.length < 1) ? <div className='row' id='error'><h2>No Articles Have Been Saved</h2></div> : 
                props.state.map(x => <SavedArticle link={x.link} 
                                              title={x.title} 
                                              text={x.text} 
                                              deleteOne={props.deleteOne}
                                              getComments={props.getComments}
                                              dbID={x._id}  
                                              id={props.state.indexOf(x)}
                                              key={props.state.indexOf(x)}/>)}
        </div>
    )

}

export default Saved;