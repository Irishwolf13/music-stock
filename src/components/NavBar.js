import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {

    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
        </nav>
    )
}

export default NavBar;