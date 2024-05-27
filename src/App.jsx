import { useState } from 'react'

const App = () => {
  
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1)
  }

  const handleDecrement = () => {
    setCount(count-1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button><br /><br />
      <button onClick={handleDecrement}>Decrement</button><br /><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App