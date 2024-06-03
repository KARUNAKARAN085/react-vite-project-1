import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [state,setState] = useState(0)
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus()
  };
  const handleChange = () => {
    inputRef.current.value="hello world";
    setState(state+1);
  };

  console.log("rerendering")
  return (
    <>
      <input type="text" ref={inputRef} placeholder="input 1"/><br /><br />
      <input type="text" placeholder="input 2"/><br /><br />
      <button onClick={handleClick}>Focus input 1</button>
      <button onClick={handleChange}>Change Value</button>
    </>
  );
};

export default App;
