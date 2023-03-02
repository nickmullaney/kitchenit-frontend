import React from "react";
import { Container} from "react-bootstrap";
import logo from "./img/logo.png";
import animatedLogo from "./img/logoAnimate.gif";


class Main extends React.Component {
constructor(props){
  super(props){
    this.setState{
      onHover: '';
    }
  }
}

  render() {
    return (
      <>
          <Container>
          <img src={logo} className="App-logo" alt="logo" />
          </Container>
      </>
    )
  }
}

export default Main;
