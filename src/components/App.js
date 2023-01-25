import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"; // Going with new Routes instead of old "Switch"
import Home from "./Home.js"
import Search from "./Search.js"
import Portfolio from "./Portfolio.js"
import NotFound from "./NotFound.js"
import NavBar from "./NavBar.js"
import DisplayPage from "./DisplayPage.js"
import logo from "./stockify.png"

function App() {
  const [rawData, setRawData] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);

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

  const handleArtistClicked = (e, id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch("http://localhost:7001/artists", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
  }
  const handleMoreInfo = (id) => {
    const mySong = (rawData.find(item => item.id === id))
    setCurrentSong(mySong)
  }

  
  return (
    <div className="mainContainer">
      <div className="titleBar2"></div>
      <img className="stockifyLogo"alt="timer" src={logo} />
      <div className="titleBar"></div>
      <div className="mainArea">
        <div className="sideBar2"></div>
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
              path="/displayPage" 
              element={<DisplayPage currentSong={currentSong}/>}
            ></Route>
            <Route 
              path="/" 
              element={<Home 
                rawData={ rawData } 
                handleArtistClicked={handleArtistClicked}
                handleMoreInfo={handleMoreInfo}
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