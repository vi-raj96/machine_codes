import React, { useState, useEffect } from 'react';

const Debouncing = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Debouncing Example</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default Debouncing;
