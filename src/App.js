import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalContextProvider from "./Store/GlobalContext";
import ErrorContextProvider from "./Store/ErrorContext";

import Form from "./Components/Form";
import Resultado from "./Components/Resultado";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          <GlobalContextProvider>
            <ErrorContextProvider>
              <Route exact path="/" component={Form} />
              <Route path="/resultado" component={Resultado} />
              <Redirect path="*" component={Resultado} />
            </ErrorContextProvider>
          </GlobalContextProvider>
          <ToastContainer position="bottom-center" />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// This front end was designed looking at this tutorial
// https://www.youtube.com/watch?v=-bll7l-BKQI
