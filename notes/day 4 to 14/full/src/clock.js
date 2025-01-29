import React, { useEffect, useState } from 'react';

export const Clock = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title=`value ${count}`;},[count]);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{document.title}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
