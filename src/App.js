import './App.css';
// import axios from 'axios';
import Header from './Header';
import About from './About';
import Main from './Main';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';
import Footer from './Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main/>
        <Routes>
          <Route
            exact path="/"
          >
          </Route>
          <Route
            path={"/myKitchen"}
            element={<MyKitchen />}
          ></Route>
                    <Route
            path={"/myCookbook"}
            element={<MyCookbook />}
          ></Route>
          <Route
            path={"/about"}
            element={<About />}
          >
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
