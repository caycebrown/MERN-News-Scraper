import React from 'react';
require('./Comment-Form.css');

class CommentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author: '',
            body: ''
        }

    }

    handleAuthorChange = (e) => {
        this.setState({author: e.target.value})
    }

    handleTextChange = (e) => {
        this.setState({body: e.target.value})
    }

    

    render(){
        var data = this.state;
        return( 
            <div className="col comment-form">
                <label>Name</label><input required={true} value={this.state.author} onChange={this.handleAuthorChange}/>
                <label>Comment</label><input required={true} value={this.state.body} onChange={this.handleTextChange}/>
                <button className="btn btn-sm btn-success" id="submit-comment" onClick={() => {this.props.newComment(this.props.state._id, data)}}>Submit</button>
            </div>

        )
    }
}

export default CommentForm;