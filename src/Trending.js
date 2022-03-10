import React from 'react'
import "./Trending.css"

function Trending() {


    const show = () => {
        const dateDiv = document.getElementById("dateDiv");
        const container = document.getElementById("container");

        const mostTrending = ["Heat Waves", "Sacrifice", "Paris", "Black Space", "When I gone", "No lie", "It'll be okay", "High School", "Stay", "Unstoppable"];

        const date = new Date();
        const yo = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

        dateDiv.innerHTML = "Top English Songs trending as on " + yo;


        for(let i = 0; i < mostTrending.length; i++) {
            const para = document.createElement("p");       

            const node = document.createTextNode((i+1) +")  " + mostTrending[i]);
            para.appendChild(node);
            container.appendChild(para);
        }
        
        for(let i = 0; i < mostTrending.length; i++) {
            console.log(mostTrending[i]);
        }
    }


  return (
    <div className='trendingContainer'>
        <div className="heading">Trending</div>
    </div>
  )
}

export default Trending