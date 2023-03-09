import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MyKitchen.css';
import { Button, Row, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion as m } from 'framer-motion';
import Trie from './Trie.js';

class MyKitchen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullIngredientList: [],
      kitchenIngredientSet: new Set(),
      currentSearch: [],
      fullIngredientTrie: null
    };
  }

  componentDidMount() {
    // Load the full recipe list into state only if it has not yet been loaded
    if (this.state.fullIngredientList.length === 0) {
      this.getFullIngredientList();
    }
    const kitchenIngredientSet = new Set();
    this.props.kitchenIngredients.forEach(ingredient => {
      kitchenIngredientSet.add(ingredient.name);
    })
    this.setState({kitchenIngredientSet: kitchenIngredientSet});
  }

  populateTrie = () => {
    let Ingredients = new Trie();
    this.state.fullIngredientList.forEach(element => Ingredients.insertWord(element.name));
    this.setState({ fullIngredientTrie: Ingredients });
  }

  getFullIngredientList = async () => {
    const url = `${process.env.REACT_APP_SERVER}/ingredients/dictionary`;
    try {
      const response = await axios.get(url);
      this.setState({ fullIngredientList: response.data }, this.populateTrie);
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  buttonClick = (submittedIngredient) => {
    // The below implementation is just to get this off the ground. It is by no means the most optimal way to do it, and I'd expect any auto-complete, clickable options functionality to do something more
    const fullIngredientList = this.state.fullIngredientList;
    //localeCompare with the options below does case-insensitive string comparison
    const matchingIdx = fullIngredientList.findIndex(ingredient => ingredient.name.localeCompare(submittedIngredient, undefined, { sensitivity: 'base' }) === 0);
    // findIndex() returns the index of the first element in the array that passes the test. Otherwise, -1.
    if (matchingIdx !== -1) {
      const newIngredient = {
        name: fullIngredientList[matchingIdx].name,
        description: fullIngredientList[matchingIdx].description,
        imageUrl: fullIngredientList[matchingIdx].imageUrl
      };
      this.props.addKitchenIngredient(newIngredient);
      const kitchenIngredientSet = this.state.kitchenIngredientSet;
      kitchenIngredientSet.add(newIngredient.name);
      let filteredIngredients = this.state.currentSearch.filter(ingredient => (!kitchenIngredientSet.has(ingredient)));
      this.setState({
        currentSearch: filteredIngredients,
        kitchenIngredientSet: kitchenIngredientSet
       });
    } else {
      console.log('Not a valid ingredient!');
    }
  };

  handleSearch = event => {
    let word = event.target.value;
    if (word.length > 1) {
      let ingredients = this.state.fullIngredientTrie.returnPossibleWords(word);
      let filteredIngredients = ingredients.filter(ingredient => (!this.state.kitchenIngredientSet.has(ingredient)));
      this.setState({ currentSearch: filteredIngredients });
    } else {
      this.setState({ currentSearch: [] });
    }
  }

  handleDeleteKitchenIngredient= async (id, ingredientName) => {
    this.props.deleteKitchenIngredient(id);
    // If currentSearch is empty, then don't add it back to the search options
    if (this.state.currentSearch.length === 0 ){
      return;
    }

    let updatedIngredients = [...this.state.currentSearch, ingredientName];
    updatedIngredients = updatedIngredients.sort((a, b) => a.localeCompare(this.buttonClick, undefined, { sensitivity: 'base' }));
    this.setState({
      currentSearch: updatedIngredients,
      });
  };

  render() {
    return (

      <div className="myKitchenBackground">
        <m.div className="motionDiv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          <m.Form className="searchIngredients text-center"
            onSubmit={this.handleSubmit} transition={{ duration: 1 }} >
            <Form.Group className='ingredientRecipeSearch'>
              <Form.Label>
                <Form.Control type="text" id="ingredient" placeholder="Enter Your Ingredients..." size="sm" onInput={this.handleSearch} style={{ width: "500px", height: "50px" }} />
                {this.state.currentSearch.length > 0 &&
                  <div class="searchOptions">
                    {this.state.currentSearch.map(element => {
                      return <m.button
                        type="button"
                        whileHover={{scale:1.05}}
                        whileTap={{scale: .8}}
                        className='searchedItem'
                        onClick={() => this.buttonClick(element)}
                      >{element}<FontAwesomeIcon icon={faPlus} /></m.button>
                    }
                    )}
                  </div>
                }
              </Form.Label>
              <div>
                <Link id='about' to="/filteredRecipes" className="findRecipes"> Search Recipes </Link>
              </div>
            </Form.Group>
          </m.Form>
          <Row xs={2} s={2} md={3} lg={5} className="g-2">
            {this.props.kitchenIngredients.map((ingredient) => (
              <m.Col key={ingredient._id}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
              >
                <div className="kitchenItem">
                  <img src={ingredient.imageUrl} alt={ingredient.name} title={ingredient.name} />
                  <h2>{ingredient.name}</h2>
                  <Button
                    variant="danger"
                    onClick={() => this.handleDeleteKitchenIngredient(ingredient._id, ingredient.name)}
                  ><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
              </m.Col>
            ))}
          </Row>
        </m.div>
      </div>

    );
  }
}

export default MyKitchen;


