import React, {useState, useEffect} from 'react';
import NewsComponent from './NewsComponent';
import "./ExplorePage.css";
import axiosbaseurl from './axiosbaseurl';

function ExplorePage({auth, userId}) {

  const [data, setData] = useState([]);

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
                    />

                  </div>
                );
              })
          }
    </div>
  )
}

export default ExplorePage