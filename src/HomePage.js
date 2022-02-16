import React from 'react';
import "./HomePage.css"
import NewsComponent from './NewsComponent';

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
