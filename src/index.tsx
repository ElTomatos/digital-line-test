/**
 * Vendors
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Store
 */
import { Provider } from "react-redux";

/**
 * Components
 */
import App from "./components/App";

/**
 * Styles
 */
import "./assets/scss/app.scss";

/**
 * Store
 */
import { configureStore } from "./store";

const store = configureStore();

/**
 * Render
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
