import React from 'react';
import axios from 'axios';
import './MyKitchen.css';
import { Button, Row, Col, Form } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { motion as m } from 'framer-motion';


class MyKitchen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullIngredientList: []
    };
  }

  componentDidMount() {
    // Load the full recipe list into state only if it has not yet been loaded
    if (this.state.fullIngredientList.length === 0) {
      this.getFullRecipeList();
    }
  }

  getFullRecipeList = async () => {
    const url = `${process.env.REACT_APP_SERVER}/ingredients/dictionary`;
    try {
      const response = await axios.get(url);
      this.setState({ fullIngredientList: response.data});
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // The below implementation is just to get this off the ground. It is by no means the most optimal way to do it, and I'd expect any auto-complete, clickable options functionality to do something more
    const fullIngredientList = this.state.fullIngredientList;
    const submittedIngredient = e.target.ingredient.value;
    //localeCompare with the options below does case-insensitive string comparison
    const matchingIdx = fullIngredientList.findIndex(ingredient => ingredient.name.localeCompare(submittedIngredient, undefined, {sensitivity: 'base'}) === 0);
    // findIndex() returns the index of the first element in the array that passes the test. Otherwise, -1.
    if (matchingIdx !== -1) {
      const newIngredient ={
        name: fullIngredientList[matchingIdx].name,
        description: fullIngredientList[matchingIdx].description,
        imageUrl: fullIngredientList[matchingIdx].imageUrl
      };
      this.props.addKitchenIngredient(newIngredient);
    } else {
      console.log('Not a valid ingredient!');
    }

    e.target.reset();
  };

  render() {
    return (

      <div className="myKitchenBackground">
        <m.div className="motionDiv" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: 'easeInOut'}}>

          <Form className="searchIngredients text-center"
            onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label >
                <Form.Control type="text" id="ingredient" placeholder="Enter Your Ingredients" size="sm" onInput={this.handleSearch}/>
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


