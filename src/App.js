import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import axios from "axios";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/detail'>
          <Detail />
        </Route>

        <Route render={() => <div>404 not found</div>}></Route>
      </Switch>
    </>
  );
}

export default App;
