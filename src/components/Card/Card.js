import React from 'react'
import './Card.css'

const Card = ({ url }) => {
  return (
    <div className='url'>
      <h3>{url.title}</h3>
      <a href={url.short_url} target='blank'>
        {url.short_url}
      </a>
      <p>{url.long_url}</p>
    </div>
  )
}

export default Card
