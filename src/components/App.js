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
    fetch('http://localhost:8001/obj')
    .then(res => res.json())
    .then(Data => console.log(Data))
},[])

// useEffect(() => {
//   fetch("https://api.chartmetric.com/api/artist/3380/artist-rank?metric=fs_likes", {
//     method: "GET",
//     mode: 'no-cors',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA2MDA1NSwidGltZXN0YW1wIjoxNjc0NTI1MDQ2MDg3LCJpYXQiOjE2NzQ1MjUwNDYsImV4cCI6MTY3NDUyODY0Nn0.TeSwh2DRELqDnidEyIHPj7o9Q2fnkXN_GZFl9ZbGN0o'
//     }
//   })
//   .then(res => res.json())                        
//   .then(returnData => console.log(returnData)) 
// },[])

  return (
    <div className="mainContainer">
      
      <div className="circle">Cirlce</div>
      <div className="titleBar">Title</div>
      <div className="mainArea">
        <div className="sideBar">
          <NavBar />
          <Routes>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <div>mainArea</div>
      </div>
      
    </div>
  );
}

export default App;