import React, {useState, useEffect} from 'react';
import "./HomePage.css";
import NewsComponent from './NewsComponent';
import NewsComponent3 from './NewsComponent3';
import axiosbaseurl from './axiosbaseurl';
import axios from 'axios';




function HomePage() {
  
  const [data, setdata] = useState([]);


  useEffect(() => {

    async function fetchData() {
      const request = await axiosbaseurl.get("GetSalesData.php");
      console.log(request.data[0]);
      // setdata(data = request);
      return request;
    }
    fetchData();
  }, [data]);




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
