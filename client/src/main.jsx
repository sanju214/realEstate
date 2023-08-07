import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vsyu7g4e0078u34p.us.auth0.com"
      clientId="SIQK2BEoURWSxK2Bqp71E6Bn462KAHzH"
      authorizationParams={{
        redirect_uri: "https://rea-estlate-ten-sigma.vercel.app",
      }}
      audience="https://rea-estlate-ten-sigma.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
