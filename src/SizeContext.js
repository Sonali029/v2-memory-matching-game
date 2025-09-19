import { createContext, useState, useContext } from "react";

const SizeContext = createContext();

export const useSize = () => useContext(SizeContext);

export const SizeProvider = ({children}) => {
  const [size, setSize] = useState( {rows : 5, cols : 4});

  return (
    <SizeContext.Provider value = {{size, setSize}}>
      {children}
    </SizeContext.Provider>
  )
}
