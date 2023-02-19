import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotificationCtx from "./context/NotificationCtx";
import NotificationProvider from "./context/NotificationProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
