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
            {this.props.kitchenIngredients.map((ingredient) => (
              <Col key={ingredient._id}>

                <div className="kitchenItem">
                  <img src={ingredient.imageUrl} alt={ingredient.name} title={ingredient.name}/>
                  <h2>{ingredient.name}</h2>
                  <Button
                    variant="danger"
                    onClick={() => this.props.deleteKitchenIngredient(ingredient._id)}
                  ><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>

              </Col>

            ))}
          </Row>

        </m.div>
      </div>





    );
  }
}

export default MyKitchen;


