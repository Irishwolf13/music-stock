import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"; // Going with new Routes instead of old "Switch"
import Home from "./Home.js"
import Search from "./Search.js"
import Portfolio from "./Portfolio.js"
import NotFound from "./NotFound.js"
import NavBar from "./NavBar.js"

function App() {
  const [rawData, setRawData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/artists')
    .then(res => res.json())
    .then(Data => setRawData(Data))
},[])

  return (
    <div className="mainContainer">
      
      {/* <div className="circle">Cirlce</div> */}
      <div className="titleBar">Title</div>
      <div className="mainArea">
        <div className="sideBar">
          <NavBar />
        </div>
        <div>
        <Routes>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/" element={<Home rawData={ rawData }/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;