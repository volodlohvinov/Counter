import React, { useState } from 'react';
import './Counter.scss'

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p className='current'>Current Value: {count}</p>
      <button className='button' onClick={handleDecrement}>-</button>
      <button className='button'  onClick={handleReset}>Reset</button>
      <button className='button'  onClick={handleIncrement}>+</button>
      
    </div>
  );
};

export default Counter;