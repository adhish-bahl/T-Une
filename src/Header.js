import React, {useState} from 'react';
import logo from "./images/tune.jpg";
import home from "./images/home.svg";
import explore from "./images/explore.svg";
import account from "./images/account.svg";
import store from "./images/store.svg"
import quiz from "./images/quizlogo.png"
import trending from "./images/TrendingIcon.svg";
import "./Header.css";
import { Link, Redirect } from "react-router-dom";  

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header(props) {


    // console.log(document.URL);
    // console.log(document.URL.lastIndexOf("/"));
    // console.log(url);
    

  const [homeActive, setHomeActive] = useState(true);
  const [exploreActive, setExploreActive] = useState(false);
  const [storeActive, setStoreActive] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [trendingActive, setTrendingActive] = useState(false);

//   Router.onUrlChange(url1 => {
//     const url = document.URL.slice(document.URL.lastIndexOf("/")+1, document.URL.length);
//    console.log(url1);
// });

  // const checkURL = () => {
  //   const url = document.URL.slice(document.URL.lastIndexOf("/")+1, document.URL.length);
  //   if(url == "home") {
  //     setHomeActive(homeActive => !homeActive);
  //     setExploreActive(exploreActive => false);
  //     setStoreActive(storeActive => false);
  //     setQuizActive(quizActive => false);
  //     setTrendingActive(trendingActive => false);
  //   }

  //   else if(url = "explore") {
  //     setHomeActive(homeActive => false);
  //     setExploreActive(exploreActive => !exploreActive);
  //     setStoreActive(storeActive => false);
  //     setQuizActive(quizActive => false);
  //     setTrendingActive(trendingActive => false);
  //   }

  //   else if (url == "store") {
  //     setHomeActive(homeActive => false);
  //     setExploreActive(exploreActive => false);
  //     setStoreActive(storeActive => !storeActive);
  //     setQuizActive(quizActive => false);
  //     setTrendingActive(trendingActive => false);
  //   }

  //   else if(url == "quiz") {
  //     setHomeActive(homeActive => false);
  //     setExploreActive(exploreActive => false);
  //     setStoreActive(storeActive => false);
  //     setQuizActive(quizActive => !quizActive);
  //     setTrendingActive(trendingActive => false);
  //   }

  //   else if (url == "trending") {
  //     setHomeActive(homeActive => false);
  //     setExploreActive(exploreActive => false);
  //     setStoreActive(storeActive => false);
  //     setQuizActive(quizActive => false);
  //     setTrendingActive(trendingActive => !trendingActive);
  //   }
  // }

  const handleHome = () => {
    <Redirect to="/" />
    // const url = document.URL.slice(document.URL.lastIndexOf("/")+1, document.URL.length);
    if(homeActive == true) {
      setHomeActive(homeActive = true);
    }
    else {
      setHomeActive(homeActive => !homeActive);
      setExploreActive(exploreActive => false);
      setStoreActive(storeActive => false);
      setQuizActive(quizActive => false);
      setTrendingActive(trendingActive => false);
    }
  }
  const handleExplore = () => {
    if(exploreActive == true) {}
    else {
      setHomeActive(homeActive => false);
      setExploreActive(exploreActive => !exploreActive);
      setStoreActive(storeActive => false);
      setQuizActive(quizActive => false);
      setTrendingActive(trendingActive => false);
    }
  }
  const handleStore = () => {
    if(storeActive == true) {}
    else {
      setHomeActive(homeActive => false);
      setExploreActive(exploreActive => false);
      setStoreActive(storeActive => !storeActive);
      setQuizActive(quizActive => false);
      setTrendingActive(trendingActive => false);
    }
  }
  const handleQuiz = () => {
    if(quizActive == true) {}
    else {
      setHomeActive(homeActive => false);
      setExploreActive(exploreActive => false);
      setStoreActive(storeActive => false);
      setQuizActive(quizActive => !quizActive);
      setTrendingActive(trendingActive => false);
    }
  }
  const handleTrending = () => {
    if(trendingActive == true) {}
    else {
      setHomeActive(homeActive => false);
      setExploreActive(exploreActive => false);
      setStoreActive(storeActive => false);
      setQuizActive(quizActive => false);
      setTrendingActive(trendingActive => !trendingActive);
    }
  }

  return (
    <div className="backest">
    <div className='header'>
        <div className="left">
          <Link to="/" className="logoandname" onClick={handleHome} >
            <img className='logoImg' src={logo} alt="Logo" />
            <span className="companyName">T-Une</span>
          </Link>
        </div>
        <div className="right">
          <ul>
			  {/* <li><Link to="/home"><img className={` ${homeActive ? 'icon active' : 'icon'}`}  src={home} alt="HomeIcon" /></Link></li>
			  <li><Link to="/explore"><img className={` ${exploreActive ? 'icon active' : 'icon'}`} src={explore} alt="ExploreIcon" /></Link></li>
			  <li><Link to="/store"><img className={` ${storeActive ? 'icon active' : 'icon'}`} src={store} alt="StoreIcon" /></Link></li>
			  <li><Link to="/quiz"><img className={` ${quizActive ? 'icon quizIcon active' : 'icon quizIcon'}`}  src={quiz} alt="QuizIcon" /></Link></li>
			  <li><Link to="/trending"><img className={` ${trendingActive ? 'icon active' : 'icon'}`}  src={trending} alt="TrendingIcon" /></Link></li> */}
			  <li><Link to="/home"><img className={` ${homeActive ? 'icon active' : 'icon'}`} onClick={handleHome} src={home} alt="HomeIcon" /></Link></li>
			  <li><Link to="/explore"><img className={` ${exploreActive ? 'icon active' : 'icon'}`} onClick={handleExplore} src={explore} alt="ExploreIcon" /></Link></li>
			  <li><Link to="/store"><img className={` ${storeActive ? 'icon active' : 'icon'}`} onClick={handleStore} src={store} alt="StoreIcon" /></Link></li>
			  <li><Link to="/quiz"><img className={` ${quizActive ? 'icon quizIcon active' : 'icon quizIcon'}`} onClick={handleQuiz} src={quiz} alt="QuizIcon" /></Link></li>
			  <li><Link to="/trending"><img className={` ${trendingActive ? 'icon active' : 'icon'}`} onClick={handleTrending} src={trending} alt="TrendingIcon" /></Link></li>
			  <li><Link to="/login"><img className='icon' src={account} alt="AccountIcon"/></Link></li>
			  {/* <li><Link to="/trending"><img className='icon' src={trending} alt="TrendingIcon" /></Link></li> */}
			  {/* <li><Link to="/login"><img className='icon' src={account} alt="AccountIcon" onClick={loginActive}/></Link></li> */}
		  </ul>
		  <p className="welcomeMessage">Hello, {props.user}</p>
        </div>
    </div>
    </div>
  )  
}

export default Header;
