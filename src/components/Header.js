import React from 'react';
import { Container, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo1.png';
import './Nav.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
          <img src={logo} alt="logo" className="App-logo" />
          <Container>
            <NavItem><Link id='home' to="/" className="nav-link">Home</Link></NavItem>

            <NavItem><Link id='myKitchen' to="/myKitchen" className="nav-link">My Kitchen</Link></NavItem>

            <NavItem><Link id='myCookbook' to="/myCookbook" className="nav-link">My Cookbook</Link></NavItem>

            <NavItem><Link id='about' to="/about" className="nav-link">Our Team</Link></NavItem>

            <NavItem><button className="loginButton">Login</button></NavItem>
            {/* {this.props.auth0.isAuthenticated ? <Logout /> : <Login />} */}
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
