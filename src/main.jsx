import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GeneralInfo />
  </React.StrictMode>
);
