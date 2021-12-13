import React from 'react';
import {
  Nav,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import "./Navigation.css"
import DemoLogin from '../Demo/demo';
import android from './android.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (

      <>
      <ProfileButton user={sessionUser} />

      <NavLink to="/propertylistings" className="login-tab">Property Listings</NavLink>


      <NavLink exact to="/propertypost" className="login-tab">

          Create Property

        </NavLink>
      </>


    );
  } else {
    sessionLinks = (
      <>



        <NavLink to="/login" className="login-tab">
        Login
        </NavLink>



      <div>
        <button>
        <DemoLogin className="login-tab"/>
        </button>
        </div>



        <NavLink to="/signup" className="login-tab">
        SignUp
        </NavLink>




      </>
    );
  }

  return (
    <div className="container">
<div className="navigation-li">
<div class="logo-image">
  <p text="Lodging"></p>
<img src={android} class="img-fluid"></img>

</div>





        {isLoaded && sessionLinks}
        </div>


</div>
  );
}

export default Navigation;
