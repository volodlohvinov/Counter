import React from 'react';
import Counter from './Counter.jsx'; 

const App = () => {
  const initialValue = 0;

  return (
    <div>
      <Counter initialValue={initialValue} />
    </div>
  );
};

export default App;