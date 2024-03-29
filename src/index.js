import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//setup Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducer/rootReducer';

//Tạo ra store tổng của ứng dụng bằng phương thức createStore
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
