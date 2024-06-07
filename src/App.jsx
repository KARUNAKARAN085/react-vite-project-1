import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./features/counter/CounterSlice";

// component
const App = () => {

  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Counter: { count }</h1>
      <button className="btn btn-primary" onClick={()=>dispatch(increment())}>Increment</button><br /><br />
      <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;