import * as React from "react";
import Switch from "./Switch";
import "./Toggle.css";

export const ToggleOn = ({ on, children }) => {
  return on ? children : null;
};

export const ToggleOff = ({ on, children }) => {
  return on ? null : children;
};

export const ToggleButton = ({ on, toggle, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />;
};

//const allowedTypes = [ToggleOn, ToggleOff, ToggleButton];

export const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return React.Children.map(children, (child) => {
    if (typeof child.type === "string") {
      return child;
    }
    const newChild = React.cloneElement(child, { on, toggle });
    return newChild;
  });
};
