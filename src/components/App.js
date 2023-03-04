import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';
import FilteredRecipes from './FilteredRecipes';
// import { motion as m } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// import { Container } from 'react-bootstrap';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cookbookRecipes: [],
      kitchenIngredients: [],
    };
  }

  componentDidMount() {
    this.getKitchenIngredients;
    this.getCookbook;
  }

  async getCookbook() {
    const url = `${process.env.REACT_APP_SERVER}/cookbook`;
    try {
      const response = await axios.get(url);
      this.setState({ cookbookRecipes: response.data});
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCookbookRecipe() {
    // TODO: deleteCookbookRecipe()
  }

  async getKitchenIngredients() {
    // TODO: getKitchenIngredients()
  }

  async deleteKitchenIngredient() {
  // TODO: deleteKitchenIngredient()
  }

  render() {
    return (
      <>
        <Router>
          <Header />

          <Routes>
            {/* <AnimatePresence> */}
            <Route
              exact path="/"
              element={<Main />}
            ></Route>
            {/* </AnimatePresence> */}

            {/* <AnimatePresence> */}
            <Route
              path={'/myKitchen'}
              element={<MyKitchen />}
            ></Route>
            {/* </AnimatePresence> */}

            {/* <AnimatePresence> */}
            <Route
              path={'/filteredRecipes'}
              element={<FilteredRecipes />}
            ></Route>
            {/* </AnimatePresence> */}

            {/* <AnimatePresence> */}
            <Route
              path={'/myCookbook'}
              element={<MyCookbook
                kitchenIngredients={this.state.kitchenIngredients}
                cookbookRecipes={this.state.cookbookRecipes}
                deleteCookbookRecipe={this.deleteCookbookRecipe}
              />}
            ></Route>
            {/* </AnimatePresence> */}


            {/* <AnimatePresence> */}
            <Route
              path={'/about'}
              element={<About />}
            ></Route>
            {/* </AnimatePresence> */}

          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
