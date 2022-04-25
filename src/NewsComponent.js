import React, {useState } from 'react';
import "./NewsComponent.css";
import likeIcon from "./images/like.svg";
import likedIcon from "./images/liked.svg";
import share from "./images/share.svg";

function NewsComponent(props) {

    const [like, setlike] = useState(false);
    const [likeCount, setLikeCount] = useState(props.likes);

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
                {/* <img src={props.imgLink} alt="NewsPicture" className='newsImg' /> */}
                <img src="https://i.pinimg.com/736x/7c/1f/c0/7c1fc0ef80848bffeaef599b414bb336.jpg" alt="NewsPicture" className='newsImg' />
            </div>
            <div className="newsRight">
                <p className="newsHeading">
                    {props.heading}
                </p>
                <p className="newsContent">
                    {props.content}
                    </p>
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
