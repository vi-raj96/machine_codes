import React, { useState } from 'react';

const Counter = () => {

    const [count,setCount] = useState(0);
    const [value,setValue] = useState(1);

    const Inc = () => {
        setCount((count) => count + value);
    }
    const Dec = () => {
        setCount((count) => count - value);
    }
    const reset = () => {
        setCount(0);
    }
    const handleStep = (e) => {
        console.log(e.target.value);
        console.log(parseInt(e.target.value));
        setValue(parseInt(e.target.value));
    }
  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={Inc}> + </button>
            <button onClick={Dec}> - </button>
        </div>
        <div>
            <lebel>Increament/Decrement by :</lebel>
            <input type='number' value = {value} onChange={handleStep}></input>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  );
};

export default Counter;
