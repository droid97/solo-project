import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import PropertyPost from "./components/PropertyPost";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Favicon from 'react-favicon'
import EditPropertyPost from "./components/EditPropertyPost";
import PropertyListings from "./components/PropertyListings";
import PropertyPostPage from "./components/PropertyPostPage";







function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    document.title = "lodging"
  }, [])



  return (
    <>

    <Favicon url={'img/favicon-16x16.png'} href="/" />

      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
         <Route exact path='/'>

            </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path="/propertylistings">
            <PropertyListings />
          </Route>

          <Route exact path="/propertylistings/:id">
            <PropertyPostPage />
          </Route>

          <Route path="/propertypost">
            <PropertyPost />
          </Route>

          <Route path="/propertylistings/:id/edit">
            <EditPropertyPost />
          </Route>

        </Switch>
      )}
      <Footer />

    </>
  );
}

export default App;
