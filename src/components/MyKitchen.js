import React from 'react';
import './MyKitchen.css';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { motion as m } from 'framer-motion';


class MyKitchen extends React.Component {
  render() {
    return (
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeInOut" }}>
        <Row xs={2} md={3} lg={6} className="g-2">
          {Array.from({ length: 20 }).map((_, idx) => (
            <Col>
              {/* <Card style={{ width: '10rem', height: '10rem'}}>
                <Card.Body>
                  <Card.Title>Meat
                  <Card.Img  src="https://baconmockup.com/100/50" padding="" />
                  </Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
                </Card.Body>
              </Card> */}

              <div className="kitchenItem">
                <img src="https://www.themealdb.com/images/ingredients/Lime-Small.png" alt="ingredient" />
                <h2> Ingredient</h2>
                <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
              </div>

            </Col>
          ))}
        </Row>
      </m.div>
    );
  }
}

export default MyKitchen;


