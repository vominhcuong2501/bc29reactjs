import { useState } from "react";
import { createContext } from "react";

const DEFAULT_VALUE = {
  isLogin: false,
};

const GlobalContext = createContext(DEFAULT_VALUE);

const GlobalProvider = (props) => {
  const [state, setState] = useState(DEFAULT_VALUE);
  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
