import React from "react";
import { Container } from "react-bootstrap";
import LearnMore from "./LearnMore";
// import logo from "./img/logo.png";
import "./Main.css";
import { motion as m } from "framer-motion";

// import background from "./img/background.jpg"
// import animatedLogo from "./img/logoAnimate.gif";


class Main extends React.Component {
  // constructor(props){
  //   super(props){
  //     this.setState{
  //       onHover: '';
  //     }
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
    this.setModalShow = this.setModalShow.bind(this);
  }
  
  setModalShow(show) {
    this.setState({ modalShow: show });
  }


  render() {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        
      >

        <Container className="main">
          <div className="main-content">
            {/* <img src={logo} className="App-logo" alt="logo" width={220} /> */}
            <div className="main-content-text">
              Introducing KitchenIt - your ultimate solution for pantry organization and meal planning! With our innovative digital platform, you can easily add ingredients that you have in your home and instantly access a treasure trove of mouth-watering meal ideas.
            </div>
            <button className="button" onClick={() => this.setModalShow(true)} >Learn More</button>

          </div>
        </Container>

        

        <LearnMore
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />

      </m.div>

      
    )
  }
}

export default Main;
