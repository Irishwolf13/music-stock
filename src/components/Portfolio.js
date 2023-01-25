import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard.js'

function Portfolio({ rawData }) {

  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch('http://localhost:7001/artists')
    .then(res => res.json())
    .then(Data => setPortfolio(Data))
  },[])

  const handleDelete = (id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch(`http://localhost:7001/artists/${id}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())                        
    .then(returnData => setPortfolio(portfolio.filter(item => item.id !== id)))
    handleSellMoney(myData.spotify_popularity)
  }
  const handleSellMoney = (costOfArtist) => {
    fetch("http://localhost:7001/users/1")
    .then(res => res.json())
    .then(returnData => {
      // console.log(returnData.money)
      // console.log(costOfArtist)
      const moneyRemaining = returnData.money + costOfArtist
      fetch("http://localhost:7001/users/1", {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({money: moneyRemaining})
      })
      // .then(res => res.json())
      // .then(returnData => console.log(returnData))      
    })
  }

  const displayItems = portfolio.map(item => (
    <PortfolioCard
      key={item.id}
      id={item.id} 
      genre={item.genre}
      trackName={item.name}
      artistName={item.artist_names[0]}
      preview={item.preview_url}
      image_url={item.image_url}
      popularity={item.spotify_popularity}
      handleDelete={handleDelete}
    />
  ))
  return(
    <div className="container">{displayItems}</div>
  )
}

export default Portfolio;