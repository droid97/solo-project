import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import PropertyPost from "./components/PropertyPost";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ListingsPage from "./components/PropertyListings";
import EditPropertyPost from "./components/EditPropertyPost";
import PropertyListings from "./components/PropertyListings";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (

    <>

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

          <Route path="/propertylistings">
            <PropertyListings />
          </Route>

          <Route path="/propertypost">
            <PropertyPost />
          </Route>

          <Route path="/editpropertypost">
            <EditPropertyPost />
          </Route>

        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
