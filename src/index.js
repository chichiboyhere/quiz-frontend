import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { AuthContextProvider } from "./context/AuthContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { store } from "./app/store";

if (process.env.REACT_APP_NODE_ENV==='production'){
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
