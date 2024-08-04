import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [offset,setOffset] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=5`);
       const data = res.data
        console.log(data);
       // setData(data);
         setData(prev => [...prev , ...data]);
      } catch (error){
        console.log(error);
      }
    }
    fetchData();
  },[offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;

      if(currentHeight+1 >=scrollHeight) {
       setOffset(offset+5);
       console.log(scrollHeight);
       console.log(currentHeight);
       console.log(offset);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[offset]);

  return (
    <div>  
      {data && data.map(product => (
        <>
        <h1> {product.title}   {product.price}$</h1>
        </>
      ))}
       <p>Loading.....</p> 
    </div>
  );
};

export default InfiniteScroll;
