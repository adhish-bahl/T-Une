import React from 'react'
import "./NewsComponent.css";
import like from "./images/like.svg";
import liked from "./images/liked.svg";
import share from "./images/share.svg";

function NewsComponent3() {
  return (
    <div className='newsContainer'>
    <div className="newsUpper">
        <div className="newsLeft">
            <img src="https://i.pinimg.com/736x/7c/1f/c0/7c1fc0ef80848bffeaef599b414bb336.jpg" alt="NewsPicture" className='newsImg' />
        </div>
        <div className="newsRight">
            <p className="newsHeading">
            Mortal remains of Indians killed in drone attack in Abu Dhabi reach Punjab
            </p>
            <p className="newsContent">The mortal remains of the two Indians who were killed in a drone attack in Abu Dhabi reached Punjab on Friday. On January 17, Hardev Singh (35) and Hardeep Singh (28), and a Pakistani national,</p>
        </div>
    </div>
    <div className="newsLower">
        <span className="likeButton likeIcon"><img src={like} alt="like" /></span>
        <span className="likeCounter">10</span>
        <span className="share">
            <img src={share} alt="shareIcon" />
        </span>
    </div>
</div>
  )
}

export default NewsComponent3