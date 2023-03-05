import React from 'react';
import axios from 'axios';
import FilteredRecipeCard from './FilteredRecipeCard';

class FilteredRecipes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filteredRecipeList: [],
    }
  }
  
  componentDidMount() {
    // Only call the server if there are ingredients in the kitchen
    if (this.props.kitchenIngredients.length > 0) {
      this.getFilteredRecipeList().then(filteredRecipeList => {
        this.getRecipeComparison(filteredRecipeList);
      })
      .catch(err => console.log(err));
    }
  }

  getFilteredRecipeList = async () => {
    const url = `${process.env.REACT_APP_SERVER}/recipes`;
    const ingredientListArray = this.props.kitchenIngredients.map(ingredient => ingredient.name);
    const ingredientList = {ingredients: ingredientListArray};
    try {
      const response = await axios.post(url, ingredientList);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  getRecipeComparison = (filteredRecipeList) => {
    /* We want to check in O(1) if the filtered recipes are in the cookbook, and, if so, add their ids to the filtered list.

    We'll use a Map of the form {name: id} for simplicity */
    const cookbookRecipeMap = new Map();
    this.props.cookbookRecipes.forEach(recipe => cookbookRecipeMap.set(recipe.name, recipe._id));
    
    const comparedFilteredRecipes = filteredRecipeList.data.map(recipe => {
      if(cookbookRecipeMap.has(recipe.name)) {
        recipe.hasInCookbook = true;
        //Note the value below returns the id, as it is the value at the name key
        recipe.cookbookId = cookbookRecipeMap.get(recipe.name);
      } else {
        recipe.hasInCookbook = false;
        recipe.cookbookId = '';
      }
      return recipe;
    });
    this.setState({ filteredRecipeList: comparedFilteredRecipes });
  };

  render() {
    return (
      // Only render components if there are ingredients in the kitchen and there are recipes returned from the server
      <>
        {(this.props.kitchenIngredients.length > 0 && this.state.filteredRecipeList.length > 0) ? this.state.filteredRecipeList.map((recipe) => (
          <FilteredRecipeCard
            key={recipe.apiId}
            recipe={recipe}
            kitchenIngredients={this.props.kitchenIngredients}
            addRecipeToCookbook={this.props.addRecipeToCookbook}
            deleteCookbookRecipe={this.props.deleteCookbookRecipe}
          />
        )) : <h2>No Recipes to Show!</h2>}
      </>     
    );
  }
}

export default FilteredRecipes;
