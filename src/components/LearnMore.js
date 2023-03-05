import React, { Component } from 'react';
import { Modal} from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import './LearnMore.css';

class LearnMore extends Component {
  render() {
    const { onHide } = this.props;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How to use KitchenIt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>Sign in with your email address or verified account</li>
            <li>Add the ingredients you have in your kitchen.</li>
            <li>Search for recipes using your ingredients.</li>
            <li>Save the recipes you want to try or keep for later in your cookbook.</li>
            <li>Get to know the creators of KitchenIt by checking out their page.</li>
            <li>Get cooking!</li>
          </ol>
          <m.button className="button" onClick={onHide}whileHover={{scale: 1.1}} whileTap={{scale:0.9}} >Close</m.button>
        </Modal.Body>
      </Modal>
    );
  }
}
export default LearnMore;


