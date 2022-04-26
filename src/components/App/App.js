import React, { useEffect, useState } from 'react'
import './App.css'
import { getUrls, postUrl } from '../../apiCalls'
import UrlContainer from '../UrlContainer/UrlContainer'
import UrlForm from '../UrlForm/UrlForm'

const App = () => {
  const [urls, setUrls] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetchUrls()
  }, [count])

  const fetchUrls = () => {
    getUrls().then((urlData) => {
      const flat = Object.values(urlData)
      setUrls(flat)
    })
  }

  const postNewUrl = (longUrl, title) => {
    postUrl(longUrl, title).then(setCount((previous) => previous + 1))
  }

  return (
    <main className='App'>
      <header>
        <h1 className='title'>URL Shortener</h1>
        <UrlForm postNewUrl={postNewUrl} />
      </header>
      <UrlContainer urls={urls} />
    </main>
  )
}

export default App
