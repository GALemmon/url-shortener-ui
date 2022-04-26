import React from 'react'
import './UrlContainer.css'
import Card from '../Card/Card'

const UrlContainer = ({ urls }) => {
  console.log(urls)
  const newUrls = urls.flat()
  const urlEls = newUrls.map((url) => {
    return <Card key={url.id} url={url} />
  })

  return (
    <section className='container'>
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  )
}

export default UrlContainer
