import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Function to start or resume the progress bar
  const startProgress = () => {
    if (intervalId) return; // Don't start a new interval if one already exists
    const id = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(id);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100); // Update every 100ms
    setIntervalId(id);
  };

  // Function to stop the progress bar
  const stopProgress = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // Function to restart the progress bar
  const restartProgress = () => {
    setProgress(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f3f3f3",
          borderRadius: "5px",
          height: "30px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            borderRadius: "5px",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
          }}
        >
          {progress}%
        </div>
      </div>
      <div>
        <button onClick={startProgress}>Start</button>
        <button onClick={stopProgress}>Stop</button>
        <button onClick={restartProgress}>Restart</button>
      </div>
    </div>
  );
};

export default ProgressBar;
