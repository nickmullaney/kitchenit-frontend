import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';
import FilteredRecipes from './FilteredRecipes';
// import { motion as m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookbookRecipes: [],
      kitchenIngredients: [],
      dataIsLoaded: false
    };
  }

  

  getCookbook = async () => {
    const url = `${process.env.REACT_APP_SERVER}/cookbook`;
    try {
      const config = await this.getConfig();
      const response = await axios.get(url, config);
      this.setState({ cookbookRecipes: response.data });
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

  deleteCookbookRecipe = async (e, id) => {
    e.stopPropagation();
    const url = `${process.env.REACT_APP_SERVER}/cookbook/${id}`;
    try {
      const config = await this.getConfig();
      await axios.delete(url, config);
      const filteredRecipes = this.state.cookbookRecipes.filter(recipe => recipe._id !== id);
      this.setState({ cookbookRecipes: filteredRecipes });
    } catch (err) {
      console.log(err);
    }
  };

  addRecipeToCookbook = async (e, newRecipe) => {
    e.stopPropagation();
    const url = `${process.env.REACT_APP_SERVER}/cookbook`;
    try {
      const config = await this.getConfig();
      const response = await axios.post(url, newRecipe, config);
      this.setState({ cookbookRecipes: [...this.state.cookbookRecipes, response.data] });
      /* We need a way to keep track of the id for our FilteredRecipe component. We set state to update the cookbook recipes, but each individual recipe can be added or removed from the cookbook from the FilteredRecipe component. 
      
      To keep track of this, we'll return the id of the created recipe, which will be set in state for each individual filtered recipe which has been added to the cookbook. */
      return response.data._id;
    } catch (err) {
      console.log(err);
    }
  };

  getKitchenIngredients = async () => {
    const url = `${process.env.REACT_APP_SERVER}/ingredients`;
    try {
      const config = await this.getConfig();
      const response = await axios.get(url, config);
      this.setState({ kitchenIngredients: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  addKitchenIngredient = async (newIngredient) => {
    const url = `${process.env.REACT_APP_SERVER}/ingredients`;
    try {
      const config = await this.getConfig();
      const response = await axios.post(url, newIngredient, config);
      this.setState({ kitchenIngredients: [...this.state.kitchenIngredients, response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  deleteKitchenIngredient = async (id) => {
    const url = `${process.env.REACT_APP_SERVER}/ingredients/${id}`;
    try {
      const config = await this.getConfig();
      await axios.delete(url, config);
      const filteredIngredients = this.state.kitchenIngredients.filter(ingredient => ingredient._id !== id);
      this.setState({ kitchenIngredients: filteredIngredients });
    } catch (err) {
      console.log(err);
    }
  };
  

  render() {
    return (
      <>
        <Router>
          <div className="body">
            <Header />
            <AnimatePresence>

              <Routes>
                <Route
                  exact path="/"
                  element={<Main />}
                ></Route>

                <Route
                  path={'/myKitchen'}
                  element={this.props.auth0.isAuthenticated && <MyKitchen
                    kitchenIngredients={this.state.kitchenIngredients}
                    addKitchenIngredient={this.addKitchenIngredient}
                    deleteKitchenIngredient={this.deleteKitchenIngredient}
                  />}

                ></Route>

                <Route
                  path={'/filteredRecipes'}
                  element={this.props.auth0.isAuthenticated &&<FilteredRecipes
                    kitchenIngredients={this.state.kitchenIngredients}
                    cookbookRecipes={this.state.cookbookRecipes}
                    addRecipeToCookbook={this.addRecipeToCookbook}
                    deleteCookbookRecipe={this.deleteCookbookRecipe}
                  />}
                ></Route>

                <Route
                  path={'/myCookbook'}
                  element={this.props.auth0.isAuthenticated && <MyCookbook
                    kitchenIngredients={this.state.kitchenIngredients}
                    cookbookRecipes={this.state.cookbookRecipes}
                    deleteCookbookRecipe={this.deleteCookbookRecipe}
                  />}
                ></Route>

                <Route
                  path={'/about'}
                  element={<About />}
                ></Route>

              </Routes>
              <Footer />
            </AnimatePresence>
          </div>
        </Router>

      </>
    );
  }
}

export default withAuth0(App);
