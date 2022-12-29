import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <App />
      {/* </MuiPickersUtilsProvider> */}
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
