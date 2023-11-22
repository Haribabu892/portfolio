import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useGlobalColorContext = () => useContext(Context);

const GlobalContext = ({ children }) => {
  const [colorState, setColorState] = useState("one");
  const [someState, setSomeState] = useState(false);

  return (
    <Context.Provider
      value={{ colorState, setColorState, someState, setSomeState }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
