import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import "./styles/normalize.css";
import getData from "./api";
getData();
setTimeout(() => {
  document.querySelector(".loader").classList.add("disabled");

  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}, 3000);

console.log("Builded by @rafaelGleal");
