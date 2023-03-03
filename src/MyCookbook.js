import React from 'react';
import {Button, Card} from 'react-bootstrap';

 class MyCookbook extends React.Component {
  render() {
    return (
      <>
      <div>MyKitchen</div>

      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="www.themealdb.com/images/ingredients/Lime-Small.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
      </>
    )
  }
}

export default MyCookbook;