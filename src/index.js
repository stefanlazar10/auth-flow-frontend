import "./i18n";
import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter } from "react-router-dom";

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
