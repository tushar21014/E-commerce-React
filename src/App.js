import './App.css';
import Nav from '../src/Comp/Nav';
import React, { useState } from 'react'
import CardsContainer from './Comp/CardsContainer';
// import Slideshow from './Comp/Slideshow';
import List from './Comp/List';
import Login from './Comp/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Home } from './Comp/Home';
import Aboutus from './Comp/Aboutus';
import Contactus from './Comp/Contactus';
import Buy from './Comp/Buy';
// import Tryy from './Comp/Tryy';
import { handleId, newcomp } from './Comp/CardsC';
import F from './Comp/F';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav heading='Comapny Name' first="Home" second="About Us" third="Contact Us  " />
            
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='Aboutus' element={<Aboutus />} />
            <Route exact path='Contactus' element={<Contactus />} />
            <Route exact path='Home/Buy' element={<Buy/>} />
            {/* <Route exact path='F' element={<F/>} /> */}
            <Route exact path="Login" element={<Login />}>
            </Route>
            <Route exact path="Home" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
    // <Router>
    //   <div className="App">
    //     <header className="App-header">
    //       <Nav heading='Comapny Name' first="Laptops" second="Computers" third="Security Devices" />
    //       <Routes>
    //         <Route exact path='/Login' element={<Login/>} />
    //       </Routes>
    //       <CardsContainer title="computers" pageSize={5} />
    //     </header>
    //   </div>
    // </Router>
  );
}

export default App;
