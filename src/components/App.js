import React from 'react';
import { Routes, Route } from "react-router-dom"; // Going with new Routes instead of old "Switch"
import Home from "./Home.js"
import Search from "./Search.js"
import Portfolio from "./Portfolio.js"
import NotFound from "./NotFound.js"
import NavBar from "./NavBar.js"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;