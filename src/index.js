import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer>
      <p>
        This React project is{" "}
        <a
          href="https://github.com/adobias7811"
          target="_blank"
          rel="noreferrer"
          title="link to Amanda's GitHub"
        >
          open source{" "}
        </a>{" "}
        and was coded by{" "}
        <a
          href="https://silly-kepler-6e4998.netlify.app"
          target="_blank"
          rel="noreferrer"
          title="Link to Amanda Dobias's portfolio"
        >
          Amanda Dobias 👩🏼‍💻{" "}
        </a>
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
