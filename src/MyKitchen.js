import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { motion as m } from 'framer-motion';

class MyKitchen extends React.Component {
  render() {
    return (
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeInOut"}}>
        <Row xs={3} md={4} lg={6} className="g-2">
          {Array.from({ length:20 }).map((_, idx) => (
            <Col>
              <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src="https://baconmockup.com/100/100" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Meat
                  </Card.Text>
                  <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </m.div>
    )
  }
}

export default MyKitchen;


