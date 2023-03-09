import { LayoutGroup } from 'framer-motion';
import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logoT.png';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
          <>
            <NavItem className="app-logo"><img src={logo} alt="logo" className="App-logo" /></NavItem>
            <LayoutGroup>
            <NavItem><Link id='home' to="/" className="nav-link">Home</Link></NavItem>

            <NavItem><Link id='myKitchen' to="/myKitchen" className="nav-link">My Kitchen</Link></NavItem>

            <NavItem><Link id='myCookbook' to="/myCookbook" className="nav-link">My Cookbook</Link></NavItem>

            <NavItem><Link id='about' to="/about" className="nav-link">Our Team</Link></NavItem>
            </LayoutGroup>

            <NavItem
           >{this.props.auth0.isAuthenticated ? <Logout /> : <Login />}</NavItem>
            
          </>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
