import React, { useEffect, useState } from 'react'
import './App.css'
import { getUrls } from '../../apiCalls'
import UrlContainer from '../UrlContainer/UrlContainer'
import UrlForm from '../UrlForm/UrlForm'

const App = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = () => {
    getUrls()
    .then((urlData) => {
      const flat = Object.values(urlData)
      setUrls(flat)
    })
  }
  console.log('App urls: ', urls)
  
  return (
    <main className='App'>
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={urls} />
    </main>
  )
}

export default App
