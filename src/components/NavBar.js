import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar(myMoney) {
  return(
    <nav className="navBar">
      <NavLink onClick={() => myMoney.handleSetDisplay(false)}className="navLink" to="/">Browse</NavLink>
      <NavLink className="navLink" to="/Search">Search</NavLink>
      <NavLink className="navLink" to="/Portfolio">Portfolio</NavLink>
      
      <div className='myMoney'>
        <div className="textFunds">Funds</div>
        <div className="textFunds">$ {myMoney.myMoney}</div>
      </div>
    </nav>
  )
}

export default NavBar;