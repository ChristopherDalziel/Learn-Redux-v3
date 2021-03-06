import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import Log from "./middlewares/log";

import "./index.css";
import App from "./components/app";

import reducers from "./reducers";

import * as serviceWorker from "./serviceWorker";

const createStoreWithMiddleware = applyMiddleware(Log, ReduxThunk)(createStore);

// Providing our App with our store so we can pass data throughout the app.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// NPM INSTALLS
// Axios is a promise based HTTP client
// Lodash is a JS utility library, we will use this to to deal witht he data from the api
// Redux-Promise is a library to deal with promises in our "action" creators
// React-Redux is a state container for React
// React-Sparklines is a package that allows us to create graphics
// Redux-Thunk a better version of Redux-promise? This - from what I can see in this application is the prevention of the app crashing when you enter something that isn't a city name
// Pro's - Easy to use, Uses familiar flow constructs, The logic is all grouped together
//  Con's - Unit tests can be hard, Async tests, There is no easy way to cancel a in progress 'thunk', No longer dispatch plain actions.
