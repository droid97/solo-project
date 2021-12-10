import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import DemoLogin from '../Demo/demo';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>

        <NavLink to="/login">
        <button type="button">
          Login
        </button>
        </NavLink>


        <DemoLogin/>




        <NavLink to="/signup">
        <button type="button">
          SignUp
        </button>
        </NavLink>




      </>
    );
  }

  return (
    <div className="header">

        <NavLink exact to="/">
        <button type="button">
          Home
        </button>
        </NavLink>

        <NavLink exact to="/propertylistings">
        <button type="button">
          Property Listings
        </button>
        </NavLink>

        <NavLink exact to="/propertypost">
        <button type="button">
          Create Property
        </button>
        </NavLink>

        {isLoaded && sessionLinks}


</div>
  );
}

export default Navigation;
