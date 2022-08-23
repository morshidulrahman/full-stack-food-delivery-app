import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "./app/context/reducer";
import { StateProvider } from "./app/context/StateProvider";
import { initialState } from "./app/context/initialState";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <StateProvider initialState={initialState}  reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
