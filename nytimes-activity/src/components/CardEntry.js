import React from 'react'




const CardEntry = (props) => {
  const { story } = props
  const { headline, snippet, section_name, multimedia, word_count, web_url, pub_date } = story
  const publ_date = pub_date.substring(0, pub_date.indexOf('T'))
  let image = ''
  
  if (multimedia.length > 0) {
    for (let i = 0; i < multimedia.length; i++) {
      if (multimedia[i].subType === 'superJumbo') {
        image = multimedia[i]
      }
    }
  }
  return (
    <div className="cards">
      <a href={web_url}>
      <img className="card-img" src={`https://www.nytimes.com/${image.url}`} alt="" />
      <div className="post-body">
          <h3 className='post-title'>{headline.main}</h3>
        <div className='ani-bar'></div>
        <div className='post-content'>
          <div className='comments'>{word_count} words</div>
          <div className='post-text'>{snippet}</div>
        </div>
        <div className='post-footer'>
          <span className='post-section'>{section_name.toUpperCase()}</span> 
          <span className='post-date'>{publ_date}</span>
        </div>
      </div>
      </a>
    </div>
  )
}

export default CardEntry;