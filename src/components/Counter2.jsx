import React, { useReducer } from 'react'
import { countReducer, initialSate } from '../reducer/countReducer';

const Counter2 = () => {
    const [state,dispatch] = useReducer(countReducer,initialSate)
  

  const handleIncrement = () => {
    dispatch({type: "INCREMENT"})
  };
  const handleDecrement = () => {
    dispatch({type: "DECREMENT"})
  };
  return (
    <div>
      <h1>Count: { state.count }</h1>
      <button onClick={handleIncrement}>Increment</button><br /><br />
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2