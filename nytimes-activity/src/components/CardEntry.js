import React from 'react'




const CardEntry = (props) => {
  console.log(props)
  const imgStyle = {
    backgroundImage: `url('${props.story.multimedia[4].url}')`,
    zIndex: '-1'
  }
  return (
    <div className="cards">
      <a href={props.story.url}>
      <img className="card-img" src={props.story.multimedia[4].url} alt="" />
      <div className="post-body">
          <h3 className='post-title'>{props.story.title}</h3>
        <div className='ani-bar'></div>
        <div className='post-content'>
          <div className='comments'>27 Comments</div>
          <div className='post-text'>{props.story.abstract}</div>
        </div>
      </div>
        <div className='post-footer'>
          <span className='post-section'>{props.story.section.toUpperCase()}</span> 
          <span className='post-date'>{props.story.published_date}</span>
        </div>
      </a>
    </div>
  )
}

export default CardEntry;