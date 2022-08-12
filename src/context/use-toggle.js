import * as React from "react";

const ToggleContext = React.createContext();

export const useToggle = () => React.useContext(ToggleContext);

export const ToggleProvider = ({ children, on, toggle }) => {
  const value = { on, toggle };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
