import { BrowserRouter as Router } from "react-router-dom";
// src/index.js
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import { AppRoutes } from "./router";
import { persistor, store } from "./redux/store";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
          <ToastContainer position="top-right" />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
