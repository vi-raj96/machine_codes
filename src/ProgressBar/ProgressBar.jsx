import React, { useState, useRef } from 'react';
import './ProgressBar.css'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [timerId, setTimerId] = useState(null);

  // Function to start the progress bar
  const startProgress = () => {
    if (timerId) return; // Return if already running

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          setTimerId(null);
        }
        return newProgress;
      });
    }, 100);

    setTimerId(intervalId);
  };

  // Function to reset the progress bar
  const resetProgress = () => {
    clearInterval(timerId);
    setProgress(0);
    setTimerId(null);
  };

  // Function to stop the progress bar
  const stopProgress = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="progress-text">{progress}%</div>
      <div className="button-group">
        <button onClick={startProgress}>Start</button>
        <button onClick={resetProgress}>Reset</button>
        <button onClick={stopProgress}>Stop</button>
      </div>
    </div>
  );
};

export default ProgressBar;
