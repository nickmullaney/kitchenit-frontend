import React from 'react';
import axios from 'axios';
import FilteredRecipeCard from './FilteredRecipeCard';
import './FilteredRecipes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withAuth0 } from '@auth0/auth0-react';

class FilteredRecipes extends React.Component {
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
        this.getRecipeComparison(filteredRecipeList.data);
      })
        .catch(err => console.log(err));
    }
  }

  getFilteredRecipeList = async () => {
    const url = `${process.env.REACT_APP_SERVER}/recipes`;
    try {
      const config = await this.getConfig();
      const response = await axios.get(url, config);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  async getConfig() {
    try{
      if(this.props.auth0.isAuthenticated){
        const response = await this.props.auth0.getIdTokenClaims();
        const jwt = response.__raw;
        const config = {
          headers: {'Authorization': `Bearer ${jwt}`}
        };
        return config;
      }else{
        throw new Error('Not Authorized');
      }
    }
    catch(error){
      console.log(error);
    }
  }

  getRecipeComparison = (filteredRecipeList) => {
    /* We want to check in O(1) if the filtered recipes are in the cookbook, and, if so, add their ids to the filtered list.

    We'll use a Map of the form {name: id} for simplicity */

    const cookbookRecipeMap = new Map();
    this.props.cookbookRecipes.forEach(recipe => cookbookRecipeMap.set(recipe.name, recipe._id));
    const comparedFilteredRecipes = filteredRecipeList.map(recipe => {
      if (cookbookRecipeMap.has(recipe.name)) {
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
      <div className='filteredBackground'>

        <Container>
          <Row xs={2} s={3} md={4}>


            {(this.props.kitchenIngredients.length > 0 && this.state.filteredRecipeList.length > 0) ? this.state.filteredRecipeList.map((recipe) => (
              <FilteredRecipeCard
                key={recipe.apiId}
                recipe={recipe}
                kitchenIngredients={this.props.kitchenIngredients}
                addRecipeToCookbook={this.props.addRecipeToCookbook}
                deleteCookbookRecipe={this.props.deleteCookbookRecipe}

              />
            )) : <h2>No Recipes to Show!</h2>}
          </Row>

        </Container>
      </div>
    );
  }
}

export default withAuth0(FilteredRecipes);
