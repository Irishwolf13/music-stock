import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {

  return(
    <nav className="navBar">
      <NavLink className="navLink" to="/">Browse</NavLink>
      <NavLink className="navLink" to="/Search">Search</NavLink>
      <NavLink className="navLink" to="/Portfolio">Portfolio</NavLink>
    </nav>
  )
}

export default NavBar;