function Card({artistName, trackName, image_url, id, handleArtistClicked}) {

  return(
    <>
      <div className="cardContainer">
        <button onClick={(e) => handleArtistClicked(id)} className="cardButton">Buy</button>
        <img className="coverArt" src={image_url} ></img>
        <div className="artistName">{artistName}</div>
        <div className="albumName">{trackName}</div>
      </div>
    </>
  )
}

export default Card;