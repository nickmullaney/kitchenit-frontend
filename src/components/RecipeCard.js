import React from 'react';
import RecipeModal from './RecipeModal';
import Card from 'react-bootstrap/Card';

class RecipeCard extends React.Component {
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
    this.props.kitchenIngredients.forEach(ingredient => kitchenIngredientSet.add(ingredient));
    const comparedRecipeIngredients = this.props.recipe.ingredients.map(ingredient => {
      if(kitchenIngredientSet.has(ingredient.name)) {
        ingredient.hasIngredient = true;
      } else {
        ingredient.hasIngredient = false;
      }
      return ingredient;
    });
    this.props.setState({comparedIngredients: comparedRecipeIngredients});
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
        <Card
          onClick={this.handleClick}
        >
          <Card.Img src={recipe.imageUrl} alt={recipe.name} title={recipe.name}/>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <button onClick={this.props.deleteCookbookRecipe}>Remove</button>
          </Card.Body>
        </Card>
        <RecipeModal
          {...recipe}
          deleteCookbookRecipe={this.props.deleteCookbookRecipe}
          comparedIngredients={this.state.comparedIngredients}
          show={this.state.showModal}
          close={this.handleCloseModal}/>
      </>
    );
  }
}

export default RecipeCard;
