import * as React from "react";
import Switch from "./Switch";
import "./Toggle.css";

const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

export function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

//export const useToggle = () => React.useContext(ToggleContext);

export const useToggle = () => {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within <Toggle />");
  }
  return context;
};

export const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};

export const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return on ? null : children;
};

export const ToggleButton = () => {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} />;
};
