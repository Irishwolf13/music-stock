import Card from './Card.js'
import React, { useState } from 'react'

function Home({ myMoney, rawData, handleArtistClicked, handleMoreInfo }) {
  const [displayGenre, setDisplayGenre] = useState(false)
  const [titleText, setTitleText] = useState('Genres')
  const [displayData, setDisplayData] = useState([])

  function displayArtists(e) {
    setDisplayGenre(prev => !prev)
    setTitleText('Artists')
    setDisplayData(rawData.filter(item => item.genre === e.target.id))
  }

  const displayItems = displayData.map(item => (
    <Card
      key={item.id}
      trackName={item.name}
      artistName={item.artist_names[0]}
      id={item.id} 
      genre={item.genre}
      preview={item.preview_url}
      image_url={item.image_url}
      popularity={item.spotify_popularity}
      handleArtistClicked={handleArtistClicked}
      handleMoreInfo={handleMoreInfo}
      myMoney={myMoney}
    />
  ))
  
  const displayChoices = 
    <div>
      <img id="Pop" className="genreArt" onClick={displayArtists} src={"https://miro.medium.com/max/1104/1*UFvb-4a9eNkh75SPAcUnHQ.webp"}/>
      <img id="Rock" className="genreArt" onClick={displayArtists} src={"https://m.media-amazon.com/images/I/61-GXzfVUOL._SY1000_.jpg"}/>
    </div>

  return(
    <>
      <h1 className="mainHeader">{titleText}</h1>
      <div className='grade'></div>
      <h1 className="mainHeader2">{titleText}</h1>
      <div className="container">
        {displayGenre ? displayItems : displayChoices}
      </div>
    </>
  )
}

export default Home;