import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const store = configureStore();

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      {/*  using browser router for routing capabilities (so we can route from a page to another and so on!) */}
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
}

// if we made a change
// and the hot module is available
// it's going to take the app comparator and replace on our page App
// without doing a full page reload
if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
