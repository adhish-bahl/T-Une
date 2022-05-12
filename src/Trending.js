import React, { useState, useEffect } from 'react'
import "./Trending.css"
import TrendingRow from './TrendingRow';
import axiosbaseurl from "./axiosbaseurl";

function Trending() {

    var [data, setData] = useState({});

    // useEffect(() => {

    //     const xhttp = new XMLHttpRequest();
    //     xhttp.open("POST", "http://localhost/DBMS%20Project/trending.php", false);
    //     xhttp.onload = function(e) {
    //         // console.table(this.responseText);
    //         // setLogRes(logRes = incomingData.result);
    //         // console.log(logRes);
    //         const incomingData = JSON.parse(this.responseText);
    //         console.table(incomingData);
    //         setData(data = incomingData);
    //     }
    //     xhttp.send();
    //     // console.log(data);
    // }, []);




    useEffect(() => {
             async function fetchData() {
        //  function fetchData() {
            const request = await axiosbaseurl.get("Trending.php");
            // const request = axiosbaseurl.get("Trending.php");
            setData(data = request.data);
            console.table(request.data);
            return request;
        }
        fetchData();
    }, []);




    // const show = () => {
    //     const container = document.getElementById("trendingTable");

    //     const mostTrending = ["Heat Waves", "Sacrifice", "Paris", "Black Space", "When I gone", "No lie", "It'll be okay", "High School", "Stay", "Unstoppable"];
    //     const mostTrendingArtist = ["Heat Waves A", "Sacrifice A", "Paris A", "Black Space A", "When I gone A", "No lie A", "It'll be okay A", "High School A", "Stay A", "Unstoppable A"];

    //     dateDiv.innerHTML = "Top English Songs trending as on " + yo;


    //     for(let i = 0; i < mostTrending.length; i++) {
    //         const para = document.createElement("tr");
    //         const node = document.createTextNode((i+1) +")  " + mostTrending[i]);
    //         para.appendChild(node);
    //         container.appendChild(para);
    //     }
        
    //     for(let i = 0; i < mostTrending.length; i++) {
    //         console.log(mostTrending[i]);
    //     }
    // }


  return (
    <div className='trendingContainer'>
        <div className="heading">Trending Tracks</div>
        <div className="section">
            <div className="trendingTable" id='trendingTable'>

            </div>
            <TrendingRow data={data} />
        </div>
    </div>
  )
}

export default Trending