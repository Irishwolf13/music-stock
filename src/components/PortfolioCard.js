function Card({genre, image_url, id, handleDelete}) {

  return(
    <>
      <div onClick={(e) => handleDelete(id)} className="cardContainer">
        <img className="coverArt" src={image_url}></img>
      </div>
    </>
  )
}

export default Card;