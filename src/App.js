import './components/App.css';
// import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import MyCookbook from './components/MyCookbook';
import MyKitchen from './components/MyKitchen'
// import { motion as m } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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

  // TODO: getKitchenIngredients()
  // TODO: deleteKitchenIngredient()
  // TODO: deleteCookbookRecipe()

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
                path={"/myKitchen"}
                element={<MyKitchen />}
              ></Route>
            {/* </AnimatePresence> */}

            {/* <AnimatePresence> */}
              <Route
                path={"/filteredRecipes"}
                element={<filteredRecipes />}
              ></Route>
            {/* </AnimatePresence> */}
  
            {/* <AnimatePresence> */}
              <Route
                path={"/myCookbook"}
                element={<MyCookbook
                  kitchenIngredients={this.state.kitchenIngredients}
                  cookbookRecipes={this.state.cookbookRecipes}
                 />}
              ></Route>
            {/* </AnimatePresence> */}
  
  
            {/* <AnimatePresence> */}
              <Route
                path={"/about"}
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
