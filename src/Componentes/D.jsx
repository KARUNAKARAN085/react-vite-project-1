import { useContext, useEffect } from "react";
import { Namecontext } from "../App";

const D = ({children}) => {
    const { name, setName } = useContext(Namecontext)
  
    useEffect(() =>{
      setTimeout(() => {
        setName("karan")
      }, 3000);
    })
  
    return (
        <div>
            <h1>Hello {name}!</h1>
        {children}
        </div>
    )
  }

export default D