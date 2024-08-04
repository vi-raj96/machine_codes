import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setIsActive(false);
        } else {
          if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
          } else {
            if (minutes > 0) {
              setMinutes((prevMinutes) => prevMinutes - 1);
              setSeconds(59);
            } else {
              if (hours > 0) {
                setHours((prevHours) => prevHours - 1);
                setMinutes(59);
                setSeconds(59);
              }
            }
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds]);

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsActive(true);
    }
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleRestart = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="input-group">
        <input
          type="number"
          placeholder="Hours"
          min="0"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Minutes"
          min="0"
          max="59"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Seconds"
          min="0"
          max="59"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div className="buttons">
        {!isActive && (
          <button onClick={handleStart}>Start</button>
        )}
        {isActive && (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default CountdownTimer;