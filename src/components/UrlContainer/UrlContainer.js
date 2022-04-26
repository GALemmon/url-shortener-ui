import React from 'react'
import './UrlContainer.css'
import Card from '../Card/Card'

const UrlContainer = ({urls}) => {
  console.log(urls[0])
  const urlEls = urls.map((url) => {
    return (
      <Card key={Date()} url={url}/>
    )
  })

  return (
    <section>
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  )
}

export default UrlContainer

