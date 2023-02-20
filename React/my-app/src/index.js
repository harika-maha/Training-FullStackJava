import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./Image";
import Desc from "./Desc";

import reportWebVitals from "./reportWebVitals";
import Price from "./Price";
import Logo from "./Logo";
import justDiv from "./justDiv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Logo />
    <App />
    <justDiv />
    <App2 />
    <Desc />
    <Price />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
