import React from 'react'
import "./Trending.css"

function Trending() {


    const show = () => {
        const container = document.getElementById("trendingTable");

        const mostTrending = ["Heat Waves", "Sacrifice", "Paris", "Black Space", "When I gone", "No lie", "It'll be okay", "High School", "Stay", "Unstoppable"];
        const mostTrendingArtist = ["Heat Waves A", "Sacrifice A", "Paris A", "Black Space A", "When I gone A", "No lie A", "It'll be okay A", "High School A", "Stay A", "Unstoppable A"];

        // dateDiv.innerHTML = "Top English Songs trending as on " + yo;


        for(let i = 0; i < mostTrending.length; i++) {
            const para = document.createElement("tr");
            const node = document.createTextNode((i+1) +")  " + mostTrending[i]);
            para.appendChild(node);
            container.appendChild(para);
        }
        
        for(let i = 0; i < mostTrending.length; i++) {
            // console.log(mostTrending[i]);
        }
    }


  return (
    <div className='trendingContainer'>
        <div className="heading">Trending Tracks</div>
        <div className="section">
            <div className="trendingTable" id='trendingTable'>

            </div>
            <table border="1">
                <tr>
                    <th>S. No.</th>
                    <th>Track Name</th>
                    <th>Artist</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Track 1</td>
                    <td>Artist 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Track 2</td>
                    <td>Artist 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Track 3</td>
                    <td>Artist 3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Track 4</td>
                    <td>Artist 4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Track 5</td>
                    <td>Artist 5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Track 6</td>
                    <td>Artist 6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Track 7</td>
                    <td>Artist 7</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Track 8</td>
                    <td>Artist 8</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Track 9</td>
                    <td>Artist 9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Track 10</td>
                    <td>Artist 10</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Trending