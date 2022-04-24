import React, {useState, useEffect} from 'react'
import NewsComponent from './NewsComponent'
import "./ExplorePage.css"
import axiosbaseurl from './axiosbaseurl';

function ExplorePage() {

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
                        heading = {post.summary}
                        content = {post.content}
                        imgLink = {post.imgLink}
                        likes = {post.likes}
                    />
                  </div>
                );
              })
          }
    </div>
  )
}

export default ExplorePage