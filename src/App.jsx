import { useState } from "react"

const App = () => {
  
  let [count, setCount] = useState(0)

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
      <h1 className="title m-4">Counter: {count}</h1>
      <button onClick={handleIncrement} className="mx-4 btn btn-success">Increment</button>
      <button onClick={handleDecrement} className="mx-4 btn btn-danger">Decrement</button>
      <button onClick={handleReset} className="mx-4 btn btn-primary">Reset</button>
    </div>
  )
}

export default App