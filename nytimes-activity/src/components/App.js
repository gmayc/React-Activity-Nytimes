import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import SearchBar from './SearchBar';
import mockData from '../MockData/mockData';
import searchNyt from '../helperFuncs/searchNyt';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: mockData
    }
  }

  resultsHandler = (query, api) => {
    searchNyt(query, api)
    .then(data => {
      this.setState({
        searchResults: data.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-6 offset-md-3">
          <SearchBar resultsHandler={this.resultsHandler}/>
        </div>
        <div>
          <div className='moto'>Making your Life Easier</div>
          <h2 className='main-header'>What We Do?</h2>
        </div>
        <Cards searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
