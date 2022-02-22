import React from 'react';
import "./HomePage.css"
import NewsComponent from './NewsComponent';
import NewsComponent3 from './NewsComponent3';

function HomePage() {
  return(
    <div className='homeContainer'>
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent3 />
    </div>)
}

export default HomePage;
