import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// NPM INSTALLS
// Axios is a promise based HTTP client
// Lodash is a JS utility library, we will use this to to deal witht he data from the api
// Redux-Promise is a library to deal with promises in our "action" creators
// React-Redux is a state container for React
