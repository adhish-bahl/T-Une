import React, {useState} from 'react';
import logo from "./images/tune.jpg";
import home from "./images/home.svg";
import explore from "./images/explore.svg";
import account from "./images/account.svg";
import store from "./images/store.svg"
import quiz from "./images/quizlogo.png"
import trending from "./images/TrendingIcon.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

  const [homeActive, setHomeActive] = useState(true);
  const [exploreActive, setExploreActive] = useState(false);
  const [storeActive, setStoreActive] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [trendingActive, setTrendingActive] = useState(false);

  const handleHome = () => {
    setHomeActive(homeActive => !homeActive);
    setExploreActive(exploreActive => false);
    setStoreActive(storeActive => false);
    setQuizActive(quizActive => false);
    setTrendingActive(trendingActive => false);
  }
  const handleExplore = () => {
    setHomeActive(homeActive => false);
    setExploreActive(exploreActive => !exploreActive);
    setStoreActive(storeActive => false);
    setQuizActive(quizActive => false);
    setTrendingActive(trendingActive => false);
  }
  const handleStore = () => {
    setHomeActive(homeActive => false);
    setExploreActive(exploreActive => false);
    setStoreActive(storeActive => !storeActive);
    setQuizActive(quizActive => false);
    setTrendingActive(trendingActive => false);
  }
  const handleQuiz = () => {
    setHomeActive(homeActive => false);
    setExploreActive(exploreActive => false);
    setStoreActive(storeActive => false);
    setQuizActive(quizActive => !quizActive);
    setTrendingActive(trendingActive => false);
  }
  const handleTrending = () => {
    setHomeActive(homeActive => false);
    setExploreActive(exploreActive => false);
    setStoreActive(storeActive => false);
    setQuizActive(quizActive => false);
    setTrendingActive(trendingActive => !trendingActive);
  }

  return (
    <div className="backest">
    <div className='header'>
        <div className="left">
          <img className='logoImg' src={logo} alt="Logo" />
          <span className="companyName">T-Une</span>
        </div>
        <div className="right">
          <ul>
			  <li><Link to="/home"><img className={` ${homeActive ? 'icon active' : 'icon'}`} onClick={handleHome} src={home} alt="HomeIcon" /></Link></li>
			  <li><Link to="/explore"><img className={` ${exploreActive ? 'icon active' : 'icon'}`} onClick={handleExplore} src={explore} alt="ExploreIcon" /></Link></li>
			  <li><Link to="/store"><img className={` ${storeActive ? 'icon active' : 'icon'}`} onClick={handleStore} src={store} alt="StoreIcon" /></Link></li>
			  <li><Link to="/quiz"><img className={` ${quizActive ? 'icon quizIcon active' : 'icon quizIcon'}`} onClick={handleQuiz} src={quiz} alt="QuizIcon" /></Link></li>
			  <li><Link to="/trending"><img className={` ${trendingActive ? 'icon active' : 'icon'}`} onClick={handleTrending} src={trending} alt="TrendingIcon" /></Link></li>
			  <li><Link to="/login"><img className='icon' src={account} alt="AccountIcon"/></Link></li>
			  {/* <li><Link to="/trending"><img className='icon' src={trending} alt="TrendingIcon" /></Link></li> */}
			  {/* <li><Link to="/login"><img className='icon' src={account} alt="AccountIcon" onClick={loginActive}/></Link></li> */}
		  </ul>
		  <p className="welcomeMessage">Hello, Guest</p>
        </div>
    </div>
    </div>
  )  
}

export default Header;
