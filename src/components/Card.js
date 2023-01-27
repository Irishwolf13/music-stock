import { useState } from 'react';
import { NavLink } from "react-router-dom"

function Card({myMoney, handleMoreInfo, popularity, preview, artistName, trackName, image_url, id, handleArtistClicked}) {
  const [owned, setOwned] = useState('Buy')
  const myPreview = new Audio(preview)
  let playStop = "Preview"
  let isPlaying = false
  if(popularity === undefined) {
    popularity = 50;
    
  }
  const handlePlayMusic = () => {
    if (isPlaying === false) {
      myPreview.play()
      isPlaying = true
      playStop = "Stop"
    }else {
      myPreview.pause()
      isPlaying = false
      playStop = "Preview"
    }
  }
  const handleClicked = () => {
    if(myMoney > popularity) {
      if(owned === 'Buy') {
        handleArtistClicked(id)
        setOwned('Owned')
      }
    } else{
      alert(`You only have $ ${myMoney}, which is sadly less than $ ${popularity}`)
    }
  }
  return(
    <>
      <div className="cardContainer">     
        <button className="cardButton" onClick={handleClicked} >{owned}</button>
        <button className="previewButton" onClick={handlePlayMusic}>{ playStop } </button>
        <NavLink className="navLink" to="/DisplayPage" onClick={(e) => handleMoreInfo(id)}><img className="coverArt" src={image_url}></img></NavLink>
        <div className="artistName">{artistName}</div>
        <div className="albumName">{trackName}</div>
        <div>Price: ${popularity}</div>
      </div>
    </>
  )
}

export default Card;