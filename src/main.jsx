import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { UserProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Home />
    </UserProvider>
  </React.StrictMode>
);
