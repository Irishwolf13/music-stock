function Card({genre, image_url}) {
    
  return(
    <>
      <div className="cardContainer">
        <img className="coverArt" src={image_url}></img>
      </div>
    </>
  )
}

export default Card;