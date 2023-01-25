function Card({popularity, preview, artistName, trackName, image_url, id, handleArtistClicked}) {
  const myPreview = new Audio(preview)
  let playStop = "Preview"
  let isPlaying = false

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

  return(
    <>
      <div className="cardContainer">
        <button className="cardButton" onClick={(e) => handleArtistClicked(e, id)} >Buy</button>
        <button className="previewButton" onClick={handlePlayMusic}>{ playStop } </button>
        <img className="coverArt" src={image_url}></img>
        <div className="artistName">{artistName}</div>
        <div className="albumName">{trackName}</div>
        <div>Popularity: {popularity}</div>
      </div>
    </>
  )
}

export default Card;