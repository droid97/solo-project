import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PropertyPost from './index.js'
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
      <ul className="navbar-nav">
      <li>
        <NavLink to="/login">
        <button type="button">
          Login
        </button>
        </NavLink>

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

        </li>
      </ul>
      </>
    );
  }

  return (
    <div className="header">
      <div className="header__left"></div>
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
    </div>
  );
}

export default Navigation;
