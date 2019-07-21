import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Scraped from './components/Scraped';
import Saved from './components/Saved';
import Comments from './components/Comments';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    scraped : null,
    archived: null,
    saved: null,
    isLoading : false
    
    }
  }


  //Method for scraping new articles
  handleClick = () => {
    this.setState({isLoading: true});
    fetch('/api/scrape')
    .then(res => res.json())
    .then(data => { this.setState({scraped: data})
      //The if populates state.archive on the initial scrape
      if(this.state.archived === null){
        this.setState({archived: data})
      }
      //This .map checks for any new articles in state.scrape and then adds them to state.archive
      data.map(({title, link, text}) => {
        for(let i = 0; i < this.state.archived.length; i++){
          if(!this.state.archived[i].title === title){
            this.setState({archived: [...this.state.archived, ...[{title: title, link: link, text: text}]]})
          }
        }
      })
    })
    .then(() => this.setState({isLoading: false}))
    .catch(e => console.log('there was an error ' + e))
  };

  //Method for retrieving saved articles from DB
  getSaved = () => {
    this.setState({isLoading: true})
    fetch('/api/saved-articles')
    .then(res => res.json())
    .then(data => this.setState({saved: data, isLoading: false}))
    //.then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Method For Saving Articles to DB
  saveNew = (e) => {
    var i = e.target.id
    var options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(this.state.scraped[i])
    };

    fetch('/api/save', options)
    .then(res => res.json())
    //.then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Delete All Saved Articles
  clearAll = () => {
    fetch('/api/clear')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(() => this.setState({scraped: null}))
    .catch(e => console.log('there was an error ' + e))
  };

  //Delete Individual Saved Article
  deleteOne = (id) => {
    fetch(`/api/delete-one${id}`)
    .then(res => res.json())
    .then(() => this.getSaved())
    .catch(e => console.log('there was an error ' + e))
  };

  newComment = (id) => {
    fetch(`/api/comments${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  getComments = (id) => {
    fetch(`/api/comments${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };


  render()  {
    return(
    <div className="container-fluid">
      <Router>
      <Header getSaved={this.getSaved} 
              clearAll={this.clearAll}
              scrape={this.handleClick}/>
      
        <Switch>
          <Route path='/saved' exact render={(props) => <Saved {...props} state={this.state.saved} deleteOne={this.deleteOne}/>}/>
          <Route exact path='/' render={(props) => <Scraped {...props} state={this.state.archived} saveNew={this.saveNew}/> }/>
          <Route exact path='/comments' render={(props) => <Comments {...props} />}/>
        </Switch>
      </Router>

      {((this.state.isLoading) === true ? <Loading /> : <br/> )}   

    </div>
    )
  };
}

export default App;
