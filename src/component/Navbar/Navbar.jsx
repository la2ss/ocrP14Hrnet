import React from "react";
import '../../assets/logo.png';
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {

    return(
        <div className="nav_container">
                      <span><Link to="/" className="logo-link">
            <img src="logo.png" className="App-logo" alt="logo" />
            </Link></span>
            <h1>HRnet</h1>
            <span><Link to="/Employee">View Current Employees</Link> </span>
        </div>
    )
}

export default Navbar