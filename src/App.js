import './App.css';
// import axios from 'axios';
import Header from './Header';
import About from './About';
import Main from './Main';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';
import logo from "./img/logo.gif";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
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
        <Main/>
        <div>
       
        </div>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </Router>
    </>
  );
}

export default App;
