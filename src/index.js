import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/main.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
