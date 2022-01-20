import React from 'react';
import logo from "./images/tune.jpg";
import home from "./images/home.svg";
import explore from "./images/explore.svg";
import account from "./images/account.svg";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className="left">
          <img className='logoImg' src={logo} alt="Logo" />
          <span className="companyName">T-Une</span>
        </div>
        <div className="right">
          <ul>
			  <li><img className='icon' src={home} alt="HomeIcon" /></li>
			  <li><img className='icon' src={explore} alt="ExploreIcon" /></li>
			  <li><img className='icon' src={account} alt="AccountIcon" /></li>
		  </ul>
		  <p className="welcomeMessage">Hello, Guest</p>
        </div>
    </div>
  )
}

export default Header;
