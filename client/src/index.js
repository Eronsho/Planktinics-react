import React, { createContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UseStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
export const Context = createContext(null);
ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UseStore(),
        device: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
