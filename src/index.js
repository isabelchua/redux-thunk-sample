import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { counterReducer } from "./reducer";

const store = createStore(counterReducer);

ReactDOM.render(<App />, document.getElementById("root"));
