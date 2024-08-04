import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonPress = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="button-row">
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
      </div>
      <div className="button-row">
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
