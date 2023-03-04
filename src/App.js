import './App.css';
// import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './About';
import MyCookbook from './MyCookbook';
import MyKitchen from './MyKitchen';
// import { motion as m } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';

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
              path={"/myCookbook"}
              element={<MyCookbook />}
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

export default App;
