import React from 'react';
import logo from "./images/tune.jpg";
import home from "./images/home.svg";
import explore from "./images/explore.svg";
import account from "./images/account.svg";
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="backest">
    <div className='header'>
        <div className="left">
          <img className='logoImg' src={logo} alt="Logo" />
          <span className="companyName">T-Une</span>
        </div>
        <div className="right">
          <ul>
			  <li><Link to="/"><img className='icon' src={home} alt="HomeIcon" /></Link></li>
			  <li><Link to="/"><img className='icon' src={explore} alt="ExploreIcon" /></Link></li>
			  <li><Link to="/login"><img className='icon' src={account} alt="AccountIcon" /></Link></li>
		  </ul>
		  <p className="welcomeMessage">Hello, Guest</p>
        </div>
    </div>
    </div>
  )
}

export default Header;
