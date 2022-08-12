import React from "react";
import { Toggle, ToggleOn, ToggleOff, ToggleButton } from "./components/Toggle";
//import Outside from "./components/Outside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>
        Foo said, <q>see you at the Bar</q>
      </h3>
      <Toggle>
        <ToggleOn>
          <div className="money">{"\uD83D\uDCB5"}</div>
        </ToggleOn>
        <ToggleOff>
          <div className="money">{"\uD83D\uDCA9"}</div>
        </ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  );
}

export default App;
