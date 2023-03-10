import React from "react";
import altLogo from '../img/chef-cooking.gif';
import Login from './Login';
import './MyKitchen.css';

class LoginRedirect extends React.Component {
  render() {
  return(
  <div className='noRecipeBox'><img src={altLogo} alt={"Alt Logo"} height={220} width={225}/><div className='noRecipe'><Login/></div></div>
  )
  }
}

export default LoginRedirect;