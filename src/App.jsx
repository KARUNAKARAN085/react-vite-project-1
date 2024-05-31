import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import B from "./Componentes/B";


export const Namecontext = createContext();

const App = () => {

  const [name, setName] = useState("KARAN")

  return (
    <Namecontext.Provider value={{name, setName}}>
        <B/>
    </Namecontext.Provider>
  )
}

export default App;