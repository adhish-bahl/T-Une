import React, {useState, useEffect } from 'react';
import "./NewsComponent.css";
import likeIcon from "./images/like.svg";
import likedIcon from "./images/liked.svg";
import share from "./images/share.svg";
import axiosbaseurl from "./axiosbaseurl"


function NewsComponent(props) {
    // componentDidMount() {
    //     props.likedPosts.map(function (data, index) {
    //         console.log("hello2");
    //         console.log(props.id);
    //         console.log(props.likedPosts[index]);
    //         if(props.likedPosts[index] == props.id) {
    //             setlike(like = true);
    //             console.log("match made");
    //             return;
    //         } else {
    //             setlike(like = false);
    //             console.log("match not made");
    //         }
    //     })
    // }

    useEffect(() => {
        // console.log("hello - "+props.id);

        // if(props.likedPosts.ind)

        const size = Object.keys(props.likedPosts).length;

        for(var i = 0; i < size; i++) {
            // console.log(props.likedPosts[i]);
            if(props.likedPosts[i] == props.id) {
                setlike(like = true);
                // console.log("match made");
                break;     
            } else {
                setlike(like = false);
                // console.log("match not made");
            }
        }

        // props.likedPosts.map(function (data, index) {
        //     console.log("hello2");
        //     console.log(props.id);
        //     console.log(props.likedPosts[index]);
        //     if(props.likedPosts[index] == props.id) {
        //         setlike(like = true);
        //         console.log("match made");
        //         // return (...);     
        //     } else {
        //         setlike(like = false);
        //         console.log("match not made");
        //     }
        // })
    }, [])

    var [like, setlike] = useState(false);
    const [likeCount, setLikeCount] = useState(parseInt(props.likes));
    // console.table(props.likedPosts);


    const checkStatus = () => {
        // console.log("loaded");

        
    }

    


    const LikeManager = () => {
        if(like) {
            setlike(like = !like);
            setLikeCount(likeCount - 1);

            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://t-une.000webhostapp.com/unlike.php?postid="+props.id+"&userid=" + props.userId, false);

            xhttp.onload = function(e) {}
            xhttp.send();
        }
        else if (!like) {
            setlike( like = !like);
            setLikeCount(likeCount + 1);

            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://t-une.000webhostapp.com/like.php?postid="+props.id+"&userid=" + props.userId, false);

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
            {/* {console.log("yoo")} */}
            <div className="newsUpper">
                <div className="newsLeft">
                    <img src={props.imgLink} alt="NewsPicture" className='newsImg' />
                    {/* <img src="https://i.pinimg.com/736x/7c/1f/c0/7c1fc0ef80848bffeaef599b414bb336.jpg" alt="NewsPicture" className='newsImg' /> */}
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
