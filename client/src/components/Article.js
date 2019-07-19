import React from 'react';
require('./Article.css');

function Article(props) {
    return (
        <div className="row" id="article">
            <div className="col">
                <a href={props.link}><h4>{props.title}</h4></a>
                <p>{props.text}</p>
                <button className='btn btn-success' id={props.id} onClick={props.saveNew}>Save Article</button>
            </div>
        </div>

    )
}

export default Article;