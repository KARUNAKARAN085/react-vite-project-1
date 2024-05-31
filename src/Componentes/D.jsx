import { useEffect } from "react";
import { useName } from "../contexts/NameContext";

const D = () => {
    const { name, setName } = useName()
  
    // useEffect(() =>{
    //   setTimeout(() => {
    //     setName("karan")
    //   }, 3000);
    // })
  
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <input type="text" value={name} onChange={
                (e) => {
                    setName(e.target.value)
                }
            }/>
        </div>
    )
  }

export default D