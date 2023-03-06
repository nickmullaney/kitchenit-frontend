import React from 'react';
import CookbookRecipeModal from './CookbookRecipeModal';
import Card from 'react-bootstrap/Card';
import './CookbookRecipeCard.css';
import Col from 'react-bootstrap/Col';


class CookbookRecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparedIngredients: [],
      showModal: false
    };
  }

  componentDidMount() {
    this.getIngredientComparison();
  }

  getIngredientComparison = () => {
    const kitchenIngredientSet = new Set();
    this.props.kitchenIngredients.forEach(ingredient => kitchenIngredientSet.add(ingredient.name));
    const comparedRecipeIngredients = this.props.recipe.ingredients.map(ingredient => {
      if(kitchenIngredientSet.has(ingredient.ingredientName)) {
        ingredient.hasIngredient = true;
      } else {
        ingredient.hasIngredient = false;
      }
      return ingredient;
    });
    this.setState({comparedIngredients: comparedRecipeIngredients});
  };

  handleClick = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {
    const recipe = this.props.recipe;
    return (
      <>
      <Col>
        <Card className={'savedRecipeCard'}
          onClick={this.handleClick}
        >
          <Card.Img
            style={{
              width: '100px',
            }}
            src={recipe.imageUrl}
            alt={recipe.name}
            title={recipe.name}
          />
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <button className={"removeSavedCard"} onClick={(e) => this.props.deleteCookbookRecipe(e, recipe._id)}>Remove</button>
          </Card.Body>
        </Card>
        <CookbookRecipeModal
          {...recipe}
          deleteCookbookRecipe={this.props.deleteCookbookRecipe}
          comparedIngredients={this.state.comparedIngredients}
          show={this.state.showModal}
          close={this.handleCloseModal}/>
          </Col>
      </>
    );
  }
}

export default CookbookRecipeCard;
