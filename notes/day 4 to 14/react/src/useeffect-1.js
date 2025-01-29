import React, {useState, useEffect} from "react";

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds+1);
        }, 500);
        return ()=> clearInterval(interval);
    }, []);
  return (
    <div>
      <h2> Timer:</h2>
      <p>{seconds} seconds are passing.</p>
    </div>
  );
}

   