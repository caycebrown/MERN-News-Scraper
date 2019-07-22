import React from 'react';
import CommentForm from './Comment-Form';
require('./Comment-Page.css');

function CommentPage(props) {
    return(
        <div className='col'>
            <div className="row" id="article">
                <div className="col">
                    <a href={props.state === null ? null : props.state.link}><h4>{props.state === null ? 'Loading...' :props.state.title}</h4></a>
                    <p>{props.state === null ? 'Loading...' : props.state.text}</p>
                </div>
            </div>
            <h1>Comments</h1>
            {props.state === null ? null : props.state.comment.map(e => { return (
            <div className="row comment">
                <div className="col">
                    <h4>{e.author}</h4>
                    <p>{e.body}</p>
                </div>
            </div>)
            })}
            <CommentForm newComment={props.newComment} state={props.state} />
        </div>
    )
}

export default CommentPage;