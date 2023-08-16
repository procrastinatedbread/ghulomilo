import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import FeatureProvider from "./contexts/FeatureContext";
import UserProvider from "./contexts/UserContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FeatureProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </FeatureProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
