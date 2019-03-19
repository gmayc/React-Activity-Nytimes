import React from 'react'
import CardEntry from './CardEntry';


const Cards = (props) => {
  return (
    <div className='card-container'>
      {
        props.searchResults.response.docs.map((story, key) => (
            <div key={key}>
              <CardEntry story={story}/>
            </div>
          )
        )
      }
    </div>
  )
}

export default Cards;
