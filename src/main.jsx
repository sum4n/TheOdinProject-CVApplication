import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationExp from "./components/EducationExp.jsx";
import PracticalExp from "./components/PracticalExp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GeneralInfo />
    <EducationExp />
    <PracticalExp />
  </React.StrictMode>
);
