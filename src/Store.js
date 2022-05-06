import React, {useEffect, useState} from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import StoreComponent from "./StoreComponent";


function Store({userId}) {

  const [data, setData] = useState([]);

    useEffect(() => {

      const xhttp = new XMLHttpRequest();
      xhttp.open("POST", "https://t-une.000webhostapp.com/store.php", false);

      xhttp.onload = function(e) {
        // console.table(this.responseText);
        const incomingData = JSON.parse(this.responseText);
        // setLogRes(logRes = incomingData.result);
        // console.log(logRes);
        // console.table(incomingData);
        setData(incomingData);
      }
      xhttp.send();
    }, []);



  return (
    <div className="Storecontainer">





    {
      data.map(post => {
        // console.log("hello");
            return (
              <div key={post.merchId}>
                <StoreComponent
                  id = {post.merchId}
                  item = {post.item}
                  link = {post.weblink}
                  desc = {post.desc}
                  rate = {post.rate}
                  price = {post.price}
                  img = {post.img}
                />
              </div>
            );
          })
    }
    </div>
  )
}

export default Store;