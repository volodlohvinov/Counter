import React, { useState } from 'react';
import { Button } from 'antd';
import { coolButton } from './button.module.scss'
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
      <p className='Counter__current' >Current Value: {count}</p>
      <Button className={'button ' + coolButton} onClick={handleDecrement}>-</Button>
      <Button className={'button ' + coolButton} onClick={handleReset}>Reset</Button>
      <Button className={'button ' + coolButton}  onClick={handleIncrement}>+</Button>
      
    </div>
  );
};

export default Counter;