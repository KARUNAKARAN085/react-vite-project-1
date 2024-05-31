import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const Namecontext = createContext();

const D = () => {
  const { name } = useContext(Namecontext)

  return <h1>Hello {name}</h1>
}

const C = () => {

}

const B = () => {

}

const App = () => {

  const [name, setName] = useState()

  return (
    <Namecontext.Provider value={{name}}>
        <B/>
    </Namecontext.Provider>
  )
}

export default App;