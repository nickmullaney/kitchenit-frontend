import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

class MyKitchen extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src="https://baconmockup.com/100/100" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Meat
                  </Card.Text>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default MyKitchen;