import React from 'react';
import {Button, Card} from 'react-bootstrap';

 class About extends React.Component {
  render() {
    return (
      <>
      <div>MyKitchen</div>

      <div className="d-flex justify-content-around">
      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="https://baconmockup.com/100/100" />
      <Card.Body>
        <Card.Title>Meat</Card.Title>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
      </div>
      
      </>
    )
  }
}

export default About;