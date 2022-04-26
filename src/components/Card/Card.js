import React from 'react'
import './Card.css'

const Card = ({ url }) => {
  return (
    <div className='url' >
      <h3>{url[0].title}</h3>
      <a href={url[0].short_url} target='blank'>
        {url[0].short_url}
      </a>
      <p>{url[0].long_url}</p>
    </div>
  )
}

export default Card
