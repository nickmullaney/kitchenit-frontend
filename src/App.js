import './App.css';
// import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './About';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';


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

        <Routes>
          
          <Route
            exact path="/"
            element={<Main />}
          ></Route>
          
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
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
