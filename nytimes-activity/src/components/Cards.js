import React, { Component } from 'react'
import CardEntry from './CardEntry';
import mockData from '../MockData/mockData';

class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: mockData
    }
  }
  
  render() {
    return (
      <div className='card-container'>
        {this.state.stories.results.map((story, key) => (
            <div key={key}>
              <CardEntry story={story}/>
            </div>
          )
        )}
      </div>
    )
  }
}

export default Cards;
