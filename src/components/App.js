import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"; // Going with new Routes instead of old "Switch"
import Home from "./Home.js"
import Search from "./Search.js"
import Portfolio from "./Portfolio.js"
import NotFound from "./NotFound.js"
import NavBar from "./NavBar.js"
import logo from "./stockify.png"

function App() {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/artists')
    .then(res => res.json())
    .then(Data => setRawData(Data))
},[])

  const [search, setSearch] = useState('')
  const filterRawData = rawData.filter(item => item.artist_names[0].toLowerCase().includes(search.toLowerCase()))
  const handleSearch = (e) => {
    setSearch(e.target.value)
  } 

  const handleArtistClicked = (id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch("http://localhost:7001/artists", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
    .then(res => res.json())                        
    .then(returnData => console.log(returnData)) 
  }

  return (
    <div className="mainContainer">
      <img className="stockifyLogo"alt="timer" src={logo} />
      <div className="titleBar"></div>
      <div className="mainArea">
        <div className="sideBar">
          <NavBar />
        </div>
        <div>
        <Routes>
            <Route 
              path="/search" 
              element={<Search 
                search={search} 
                handleSearch={handleSearch} 
                rawData={ filterRawData } 
                handleArtistClicked={handleArtistClicked}
              />}>
            </Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route 
              path="/" 
              element={<Home 
                rawData={ rawData } 
                handleArtistClicked={handleArtistClicked}
              />}>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;