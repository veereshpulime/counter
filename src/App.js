import React,{useState} from 'react';
import './App.css';

const Index = () => {
  const [count,setCount] = useState(0);

  const incrementCount = () => {
    setCount ((prevCount) => {
      return prevCount +1
    })
  }
  
  const decrementCount = () => {
    setCount ((prevCount) => {
      return prevCount -1
    })
  }

  const resetCount = () => {
    setCount (0)
  }

  return (
    <div className="App">
      <div className="countcontainer">
      <header className='heading'>COUNTER</header>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <div>
      <button onClick={resetCount}>RESET</button></div>
      </div>
    </div>
  );

};

export default Index;