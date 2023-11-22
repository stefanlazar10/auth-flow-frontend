import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
