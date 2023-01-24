function Card({genre, image_url, id, handleArtistClicked}) {

  return(
    <>
      <div onClick={(e) => handleArtistClicked(id)} className="cardContainer">
        <img className="coverArt" src={image_url}></img>
      </div>
    </>
  )
}

export default Card;