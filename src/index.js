import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ContextProviderComponent from "./components/Contextprovider";
import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <ContextProviderComponent>
        <App />
      </ContextProviderComponent>
    </ToastProvider>
  </React.StrictMode>
);

reportWebVitals();
