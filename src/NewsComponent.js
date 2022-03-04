import React, {useState } from 'react';
import "./NewsComponent.css";
import likeIcon from "./images/like.svg";
import likedIcon from "./images/liked.svg";
import share from "./images/share.svg";

function NewsComponent() {

    const [like, setlike] = useState(false);
    const [likeCount, setLikeCount] = useState(10);

    const likeManager = () => {
        if(like) {
            setlike(!like);
            setLikeCount(likeCount - 1);
        }
        else if (!like) {
            setlike(!like);
            setLikeCount(likeCount + 1);
        }
    }

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
                <p className="newsContent">The mortal remains of the two Indians who were killed in a drone attack in Abu Dhabi reached Punjab on Friday. On January 17, Hardev Singh (35) and Hardeep Singh (28), and a Pakistani national, all staff of the Abu Dhabi National Oil Company were killed and six others injured in suspected drone attacks near the UAE capital's airport. The attacks were claimed by Yemen's Houthi rebels.</p>
            </div>
        </div>
        <div className="newsLower">
            <span className="likeButton" className="likeIcon"><img src={like ? likedIcon : likeIcon} alt="like" onClick={likeManager}/></span>
            <span className="likeCounter">{likeCount}</span>
            <span className="share">
                <img src={share} alt="shareIcon" />
            </span>
        </div>
    </div>)
}

export default NewsComponent;
