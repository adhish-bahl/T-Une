import React, {useState, useEffect} from 'react';
import "./HomePage.css";
import NewsComponent from './NewsComponent';
import axiosbaseurl from './axiosbaseurl';

function HomePage() {
  
  const [data, setData] = useState([]);

  // const [isLoading, setisLoading] = useState(true);
  // const [itemsArray, setItemsArray] = useState([]);
  // const [displayArray, setDisplayArray] = useState([]);

  // useEffect(() => {
  //   axiosbaseurl.get("GetSalesData.php").then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosbaseurl.get("Posts.php");
      setData(request.data);
      return request;
    }
    fetchData();


    // setisLoading(true);
    //     axios.post("http://localhost/DBMS%20Project/GetSalesData.php", {category: categoryFromUrl})
    //     .then(({data}) => {
    //         if (data.responseCode === 200) {
    //           setItemsArray(data.productItems);
    //           setDisplayArray(data.productItems);
    //           setisLoading(false);
    //         }
    //     })
    //     .catch(e => console.log(e));

    //     console.log(data);

  }, []);

    // console.log(typeof(data));

    // var newsCom = [];
    //   for(var i = 0; i < 4; i++) {
    //     newsCom.push(
    //         <NewsComponent
    //            key = {data[i].postId}
    //            heading = {data[i].summary}
    //            content = {data[i].content}
    //            imgLink = {data[i].imgLink}
    //            likes = {data[i].likes}
    //         />
    //     )
    //   }

  return(
    <div className='homeContainer'>

      {/* {newsCom} */}

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
      
    </div>)
}

export default HomePage;
