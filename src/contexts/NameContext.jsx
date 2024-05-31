import React, { createContext, useContext, useState } from 'react'

const Namecontext = createContext();

export const NameProvider = ({children}) => {

    const [name, setName] = useState("KARAN");

  return (
    <Namecontext.Provider value={{name, setName}}>
        {children}
    </Namecontext.Provider>
  )
}

export const useName = () => useContext(Namecontext);