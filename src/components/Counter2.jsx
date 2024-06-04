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
    <div className='m-5'>
      <h1>Count: { state.count }</h1>
      <button className='btn btn-primary' onClick={handleIncrement}>Increment</button><br /><br />
      <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2