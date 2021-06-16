import React from "react";

const GlobalParamsContext = React.createContext({});

const GlobalParamsContextProvider = ({ children }) => {
  return (
    <GlobalParamsContext.Provider>{children}</GlobalParamsContext.Provider>
  );
};

export { GlobalParamsContext, GlobalParamsContextProvider };
