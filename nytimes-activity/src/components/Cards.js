import React, { Component } from 'react'
import CardEntry from './CardEntry';
import mockData from '../MockData/mockData';

// class Cards extends Component { 
//   render() {
//     return (
//       <div className='card-container'>
//         {
//           this.props.searchResults.response.docs.map((story, key) => (
//               <div key={key}>
//                 <CardEntry story={story}/>
//               </div>
//             )
//           )
//           // console.log(this.state)
//         }
//       </div>
//     )
//   }
// }

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
