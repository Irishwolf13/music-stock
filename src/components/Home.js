import Card from './Card.js'
import React, { useState } from 'react'

function Home({ rawData }) {
  const [displayGenre, setDisplayGenre] = useState(false)

  function displayArtists() {
    setDisplayGenre(prev => !prev)
  }

  const handleArtistClicked = (id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch("http://localhost:7001/artists", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
    .then(res => res.json())                        
    .then(returnData => console.log(returnData)) 
  }
  
    const displayItems = rawData.map(item => (
      <Card
        key={item.id}
        id={item.id} 
        genre={item.genre}
        image_url={item.image_url}
        rawData={rawData}
        handleArtistClicked={handleArtistClicked}
      />
    ))
    
  return(
    <div className="container">
      {displayGenre ? displayItems : <img className="genreArt" onClick={displayArtists} src={"https://miro.medium.com/max/1104/1*UFvb-4a9eNkh75SPAcUnHQ.webp"}/>}
    </div>
  )
}

export default Home;