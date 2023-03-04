import React from 'react';
import './MyKitchen.css';
import { Button, Row, Col, Form } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { motion as m } from 'framer-motion';


class MyKitchen extends React.Component {

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
<<<<<<< HEAD
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
=======

      <div className="myKitchenBackground">
        <m.div className="motionDiv" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: 'easeInOut'}}>

          <Form className="searchIngredients text-center"
            onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label >
                <Form.Control type="text" id="getRecipes" placeholder="Enter Your Ingredients" size="sm" onInput={this.handleSearch}/>
              </Form.Label>
              <button type="submit" className="addIngedient"> Add Ingredient </button>
              <button className="findRecipes" onClick={() => this.setModalShow(true)}> Find Your Recipes </button>
            </Form.Group>
          </Form>



          <Row xs={1} md={3} lg={6} className="g-2">
            {Array.from({ length:20 }).map((_, idx) => (
              <Col>

                <div className="kitchenItem">
                  <img src="https://www.themealdb.com/images/ingredients/Lime-Small.png" alt="ingredient"/>
                  <h2> Ingredient</h2>
                  <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>

              </Col>

            ))}
          </Row>

        </m.div>
      </div>





>>>>>>> 209f6e18a9aeec2b6f9903a1ae6456794304da1f
    );
  }
}

export default MyKitchen;


