import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PropertyPost from './index.js'
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
        <NavLink to="/propertypost">
        <button type="button">
          Post a Property
        </button>
        </NavLink>


      </>
    );
  }

  return (

    <ul>
      <li>
        <NavLink exact to="/">
        <button type="button">
          Home
        </button>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>

  );
}

export default Navigation;
