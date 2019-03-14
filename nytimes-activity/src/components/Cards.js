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
        <div>
          <div className='moto'>Making your Life Easier</div>
          <h2 className='main-header'>What We Do?</h2>
        </div>

        {
          this.state.stories.response.docs.map((story, key) => (
              <div key={key}>
                <CardEntry story={story}/>
              </div>
            )
          )
          // console.log(this.state)
        }
      </div>
    )
  }
}

export default Cards;
