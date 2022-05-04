import React, {useState, useEffect } from 'react';
import "./NewsComponent.css";
import likeIcon from "./images/like.svg";
import likedIcon from "./images/liked.svg";
import share from "./images/share.svg";
import axiosbaseurl from "./axiosbaseurl"

function NewsComponent(props) {

    const [like, setlike] = useState(false);
    const [likeCount, setLikeCount] = useState(parseInt(props.likes));
    // console.log(typeof(likeCount));

    const LikeManager = () => {
        if(like) {
            setlike(!like);
            setLikeCount(likeCount - 1);

            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost/DBMS%20Project/unlike.php?postid="+props.id+"&userid=" + props.userId, false);

            xhttp.onload = function(e) {}
            xhttp.send();
        }
        else if (!like) {
            setlike(!like);
            setLikeCount(likeCount + 1);

            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost/DBMS%20Project/like.php?postid="+props.id+"&userid=" + props.userId, false);

            xhttp.onload = function(e) {}
            xhttp.send();
        }
    }

    const likeStyling = {
        display: props.auth ? "inline" : "none",
    }

    const likeStylingOpp = {
        display: props.auth ? "none" : "inline",
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
                <span>
                    <span style={likeStyling} className="likeButton" className="likeIcon"><img src={like ? likedIcon : likeIcon} alt="like" onClick={LikeManager}/></span>
                    <span className='likeCount'>
                        <p className="ḷikeLabel" style={likeStylingOpp}>
                            <img src={likedIcon} alt="like" className='likedLogout'/>
                        </p> 
                        {likeCount}
                    </span>
                </span>
                <span className="share">
                    <img src={share} alt="shareIcon" />
                </span>
            </div>
        </div>
    )
}

export default NewsComponent;
