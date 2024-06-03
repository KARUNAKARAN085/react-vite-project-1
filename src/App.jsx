import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [state,setState] = useState(0)
  const countRef = useRef(0);

  const handleRefIncrement = () => {
    countRef.current += 1;
    console.log(countRef.current)
  };
  const handleStateIncrement = () => {
    return(
      setState(state + 1)
    )
  };

  console.log("rerendering")
  return (
    <>
      <h1>State count: {state}</h1>
      <h1>Ref count: {countRef.current}</h1>
      <button onClick={handleRefIncrement}>Increment Ref Count</button><br /><br />
      <button onClick={handleStateIncrement}>Increment State Count</button>
    </>
  );
};

export default App;
