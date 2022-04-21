import React, {useState, useEffect} from 'react';
import "./HomePage.css";
import NewsComponent from './NewsComponent';
import NewsComponent3 from './NewsComponent3';
import axiosbaseurl from './axiosbaseurl';
import axios from 'axios';




function HomePage() {
  
  const [data, setdata] = useState({});
  // const [isLoading, setisLoading] = useState(true);
  // const [itemsArray, setItemsArray] = useState([]);
  // const [displayArray, setDisplayArray] = useState([]);


  useEffect(() => {

    async function fetchData() {
      const request = await axiosbaseurl.get("GetSalesData.php");
      // console.log(request.data[0]);
      console.log(typeof request.data[0]);
      // setdata(data = request.data[0]);
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

  }, [data]);

    // console.log(data);


// componentDidMount() {
//     axios.get('http://localhost/DBMS%20Project/GetSalesData.php')
//     .then(res => 
//     {
//       this.setState({data: res.data});
//     });
//   };



//   useEffect(() => {
//     axios.get('http://localhost/DBMS%20Project/GetSalesData.php')
//         .then(response => setTotalReactPackages(response.data.total));
// }, []);
// console.log(data);


// shaam ko free ho ke call karna

  return(
    <div className='homeContainer'>
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent />
        <NewsComponent3 />
        <NewsComponent3 />
    </div>)
}

export default HomePage;
