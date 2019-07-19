import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Loading from './components/Loading';



class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    scraped : null,
    isLoading : false
    }
  }


  //Method for scraping new articles
  handleClick = () => {
    this.setState({isLoading: true});
    fetch('/api/scrape')
    .then(res => res.json())
    .then(data => this.setState({scraped: data}))
    .then(() => this.setState({isLoading: false}))
    //.then(data => console.log(data))
    .catch(e => console.log('there was an error ' + e))
  };

  //Method for retrieving saved articles from DB
  getSaved = () => {
    this.setState({isLoading: true})
    fetch('/api/saved-articles')
    .then(res => res.json())
    .then(data => this.setState({scraped: data, isLoading: false}))
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

  //Delete Method
  clearAll = () => {
    fetch('/api/clear')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(() => this.setState({scraped: null}))
    .catch(e => console.log('there was an error ' + e))
  };

  render()  {
    return(
    <div className="container-fluid">

      <Header getSaved={this.getSaved} 
              clearAll={this.clearAll}
              scrape={this.handleClick}/>

      {((this.state.scraped) === null ? <h1>No articles have been scraped yet</h1>  :
          this.state.scraped.map(x => {  
          return <Article link={x.link} 
                          title={x.title} 
                          text={x.text} 
                          saveNew={this.saveNew} 
                          id={this.state.scraped.indexOf(x)}
                          key={this.state.scraped.indexOf(x)}/>}) )}

      {((this.state.isLoading) === true ? <Loading /> : <br/> )}   

    </div>
    )
  };
}

export default App;
