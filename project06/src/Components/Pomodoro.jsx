import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

function Pomodoro() {
  // State to track the total number of seconds remaining....

  const [totalSeconds, setTotalSeconds] = useState(30 * 60);

  // State to track whether the timer is running or not......
  const [isRunning, setIsRunning] = useState(false);

  // Calculate the minutes and seconds from the total seconds.........
  
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // useEffect hook to handle the timer interval..........

  useEffect(() => {
    let timer;

    // If the timer is running and there is time remaining....

    if (isRunning && totalSeconds > 0) {
      // Set an interval to decrease the totalSeconds by 1 every second.........

      timer = setInterval(() => {
        setTotalSeconds(prev => prev - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      // If the time is up, stop the timer..........

      setIsRunning(false);
    }

    // Clean up the interval on component unmount or when the timer stops.........

    return () => clearInterval(timer);
  }, [isRunning, totalSeconds]);

  // Function to start the timer..........

  function start() {

    if (!isRunning && totalSeconds > 0) {
      setIsRunning(true);
    }
  }

  // Function to stop the timer..........

  function stop() {
    if (isRunning) {
      setIsRunning(false);
    }
  }

  // Function to reset the timer to the initial state...........
  
  function reset() {
    setIsRunning(false);
    setTotalSeconds(30 * 60);
  }

  return (
    <div>
     
      <p className='time'>
        {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </p>
    
      <button className='start-btn' onClick={start} disabled={isRunning}>
        Start
      </button>
    
      <button className='stop-btn' onClick={stop} disabled={!isRunning}>
        Stop
      </button>
    
      <button className='reset-btn' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Pomodoro;
