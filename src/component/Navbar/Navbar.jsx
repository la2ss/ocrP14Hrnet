import React from "react";
import '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {

    return(
        <div className="nav_container">
            <span><a href="/" className="logo-link">
            <img src="logo.png" className="App-logo" alt="logohrnet" />
          </a></span>
            <h1>HRnet</h1>
            <span><a href="/">View Current Employees</a></span>
        </div>
    )
}

export default Navbar