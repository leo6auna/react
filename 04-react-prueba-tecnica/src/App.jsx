import { useState, useEffect } from 'react'
import './App.css'


const FACT_ENDPOINT_URL = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_IMAGE_PREFIX = 'https://cataas.com/'
export function App() {
  const [fact, setFact] = useState()
  const[imageUrl, setImageUrl] = useState()
  useEffect(()=> {
    fetch(FACT_ENDPOINT_URL)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      const firstWord = fact.split(' ',3).join(' ')
      console.log(firstWord)
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response =>{
        const{url} = response
        setImageUrl(url)
      })
    })
  }, [])

  return (
    <main>        
    <h1>App de gatitos</h1>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={`${CAT_IMAGE_PREFIX}${imageUrl}`} alt={`Image extracted using the three first random words for ${fact}`}></img>}
    </main>
  )
}

export default App
