import React from 'react';
require('./Article.css');

function SavedArticle(props) {
    return (
        <div className="row" id="article">
            <div className="col">
                <a href={props.link}><h4>{props.title}</h4></a>
                <p>{props.text}</p>
                <div className='btn-row'>
                    <button className='btn btn-danger' id={props.id} onClick={() => props.deleteOne(props.dbID)}>Delete</button>
                    <button className='btn btn-primary' id={props.id} >Add Comment</button>
                </div>
                
            </div>
        </div>

    )
}

export default SavedArticle;