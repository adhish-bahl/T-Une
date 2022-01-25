import React from 'react';
import NewsComponent from './NewsComponent';
import "./HomePage.css"

function HomePage() {
  return(
    <div className='homeContainer'>
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
    </div>)
}

export default HomePage;
