import React, { useState, useEffect } from 'react';

const Ticker = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Ticker</h2>
      <p>{value}</p>
    </div>
  );
};

export default Ticker;
