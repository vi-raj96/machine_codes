import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Renamed from `offset`

  // Mock data generation function
  const generateMockData = (start, limit) => {
    const mockData = [];
    for (let i = start; i < start + limit; i++) {
      mockData.push({ id: i, title: `Product ${i}`, price: (i + 1) * 10 });
    }
    return mockData;
  };

  useEffect(() => {
    // Simulate data fetching by generating mock data
    const fetchData = () => {
      const newData = generateMockData(startIndex, 5); // Generate 5 items at a time
      setData((prev) => [...prev, ...newData]); // Append new data to the existing data
    };
    fetchData();
  }, [startIndex]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;

      if (currentHeight + 1 >= scrollHeight) {
        setStartIndex((prevStartIndex) => prevStartIndex + 5); // Increase the starting index for the next batch
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {data &&
        data.map((product) => (
          <div key={product.id} style={{ margin: "10px 0" }}>
            <h2>
              {product.title} - ${product.price}
            </h2>
          </div>
        ))}
      <p>Loading...</p>
    </div>
  );
};

export default InfiniteScroll;
