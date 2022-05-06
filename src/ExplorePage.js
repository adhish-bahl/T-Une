import React, {useState, useEffect} from 'react';
import NewsComponent from './NewsComponent';
import "./ExplorePage.css";
import axiosbaseurl from './axiosbaseurl';

function ExplorePage({auth, userId}) {

  const [data, setData] = useState([]);

  const xhttp = new XMLHttpRequest();
  var incomingData;
  xhttp.open("POST", "https://t-une.000webhostapp.com/Like2.php?userid="+ userId, false);
  xhttp.onload = function(e) {
    incomingData = JSON.parse(this.responseText);
    // const incomingData = this.responseText;
    // console.log(typeof(incomingData));
    // console.log(incomingData);
  }
  xhttp.send();

  useEffect(() => {
    async function fetchData() {
      const request = await axiosbaseurl.get("Posts.php");
      setData(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className='exploreContainer'>
        {
          data.map(post => {
                return (
                  <div key={post.postId}>
                    <NewsComponent
                        id = {post.postId}
                        heading = {post.summary}
                        content = {post.content}
                        imgLink = {post.imgLink}
                        likes = {post.likes}
                        auth= {auth}
                        userId = {userId}
                        likedPosts = {incomingData}
                        source = {post.source}
                    />

                  </div>
                );
              })
          }
    </div>
  )
}

export default ExplorePage