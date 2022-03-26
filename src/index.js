import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CryptopContext } from "./CryptopContext";
import "react-alice-carousel/lib/alice-carousel.css"

ReactDOM.render(
  <React.StrictMode>
    <CryptopContext>
      <App />
    </CryptopContext>
  </React.StrictMode>,
  document.getElementById("root")
);
