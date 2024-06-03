import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus()
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="input 1"/><br /><br />
      <input type="text" placeholder="input 2"/><br /><br />
      <button onClick={handleClick}>Focus input 1</button>
    </>
  );
};

export default App;
