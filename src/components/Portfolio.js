import React, { useState, useEffect } from 'react';
import Card from './Card.js'

function Portfolio() {

  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch('http://localhost:7001/artists')
    .then(res => res.json())
    .then(Data => setPortfolio(Data))
  },[])

  const displayItems = portfolio.map(item => (
    <Card
      key={item.id}
      id={item.id} 
      genre={item.genre}
      image_url={item.image_url}
    />
  ))
  return(
    <div>{displayItems}</div>
  )
}

export default Portfolio;