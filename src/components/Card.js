function Card({preview, artistName, trackName, image_url, id, handleArtistClicked}) {
  const myPreview = new Audio(preview)
  let playStop = "Play"
  let isPlaying = false

  const handlePlayMusic = () => {
    if (isPlaying === false) {
      myPreview.play()
      isPlaying = true
      playStop = "Stop"
    }else {
      myPreview.pause()
      isPlaying = false
      playStop = "Play"
    }
  }

  return(
    <>
      <div className="cardContainer">
        <button onClick={(e) => handleArtistClicked(id)} className="cardButton">Buy</button>
        <button onClick={handlePlayMusic}>{ playStop } </button>
        <img className="coverArt" src={image_url} ></img>
        <div className="artistName">{artistName}</div>
        <div className="albumName">{trackName}</div>
        <div>frank</div>
      </div>
    </>
  )
}

export default Card;