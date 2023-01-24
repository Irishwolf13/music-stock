import Card from './Card.js'
import React, { useState } from 'react'

function Home({ rawData, handleArtistClicked }) {
  const [displayGenre, setDisplayGenre] = useState(true)
  const [titleText, setTitleText] = useState('Genres')

  function displayArtists() {
    setDisplayGenre(prev => !prev)
    setTitleText('Artists')
  }

  const displayItems = rawData.map(item => (
    <Card
      key={item.id}
      trackName={item.name}
      artistName={item.artist_names[0]}
      id={item.id} 
      genre={item.genre}
      image_url={item.image_url}
      // rawData={rawData}
      handleArtistClicked={handleArtistClicked}
    />
  ))
    
  return(
    <>
      <h1 className="mainHeader">{titleText}</h1>
      <div className="container">
        {displayGenre ? displayItems : <img className="genreArt" onClick={displayArtists} src={"https://miro.medium.com/max/1104/1*UFvb-4a9eNkh75SPAcUnHQ.webp"}/>}
      </div>
    </>
  )
}

export default Home;