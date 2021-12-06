import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
    <div className="main-container">

        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>

        </Switch>



    </div>
  );
}

export default App;
