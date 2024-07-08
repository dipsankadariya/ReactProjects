import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
       let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;
      
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>The current time is {time}</p>
    </div>
  );
}

export default App;