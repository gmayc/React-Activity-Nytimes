import React, { Component } from 'react'
import apiKey from '../apiKey';


class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  onChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }



  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" name="search" type="text" onChange={this.onChange} value={this.state.searchQuery}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.resultsHandler(this.state.searchQuery, apiKey)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
}

export default SearchBar
