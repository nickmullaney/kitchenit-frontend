import React from 'react';
import FilteredRecipeModal from './FilteredRecipeModal';
import Card from 'react-bootstrap/Card';

class FilteredRecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparedIngredients: [],
      id: this.props.recipe.cookbookId,
      showModal: false,
      hasInCookbook: this.props.recipe.hasInCookbook
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

  handleAddRecipe = (e, recipe) => {
    this.props.addRecipeToCookbook(e, recipe).then(id => {
      this.setState({id: id, hasInCookbook: true});
    });
  }

  handleDeleteRecipe = (e) => {
    this.props.deleteCookbookRecipe(e, this.state.id);
    this.setState({id: '', hasInCookbook: false});
  }

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
            {this.state.hasInCookbook ? <button onClick={(e) => this.handleDeleteRecipe(e)}>Remove from Cookbook</button> : <button onClick={(e) => this.handleAddRecipe(e, recipe)}>Add to Cookbook</button>         
            }
          </Card.Body>
        </Card>
        <FilteredRecipeModal
          recipe={recipe}
          id={this.state.id}
          hasInCookbook={this.state.hasInCookbook}
          handleDeleteRecipe={this.handleDeleteRecipe}
          handleAddRecipe={this.handleAddRecipe}
          comparedIngredients={this.state.comparedIngredients}
          show={this.state.showModal}
          close={this.handleCloseModal}/>
      </>
    );
  }
}

export default FilteredRecipeCard;
