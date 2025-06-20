import React, { use } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Content from './Components/Content.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       if (response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       setData(response.data);
  //       setFetchError(null)
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //       setFetchError(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);
return (
  <div className="App flex flex-col justify-between items-center h-screen w-full mx-auto">
    <Header />
    <Content data ={data}/>
    <Footer data={data}/>
  </div>
);
}

export default App;
