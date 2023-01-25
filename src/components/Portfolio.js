import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard.js'

function Portfolio({ rawData, handleSetMoney }) {

  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch('http://localhost:8001/recordLable')
    .then(res => res.json())
    .then(Data => setPortfolio(Data))
  },[])

  const handleDelete = (id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch(`http://localhost:8001/recordLable/${id}`, {
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
    fetch("http://localhost:8001/users/1")
    .then(res => res.json())
    .then(returnData => {
      const moneyRemaining = returnData.money + costOfArtist
      fetch("http://localhost:8001/users/1", {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({money: moneyRemaining})
      })
      .then(handleSetMoney(moneyRemaining))      
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