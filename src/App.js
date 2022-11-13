import './App.css';
import Nav from '../src/Comp/Nav';
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import CardsContainer from './Comp/CardsContainer';
import Login from './Comp/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Aboutus from './Comp/Aboutus';
import Contactus from './Comp/Contactus';
import Buy from './Comp/Buy';
import { handleId, newcomp } from './Comp/CardsC';
// import F from './Comp/F';
import Home from './Comp/Home';
import ProductsC from './Comp/ProductsC';
import Products from './Comp/Products';
import Item from './Comp/Item';
import SearchBar from './Comp/SearchBar';
import Footer from './Comp/Footer';
import Signup from './Comp/Signup';
import UserStatesss from './Context/UserStatesss';
import UserDetails from './Comp/UserDetails';
import ForgotPassword from './Comp/ForgotPassword';
import Change_Password from './Comp/Change_Password';
import { CartProvider } from './Context/cartContext';
import CartProduct from './Comp/CartProduct';





function App() {

  return (
    <div className="App">
      <header className="App-header">
<CartProvider>

        <UserStatesss>
        <Router>
          <Nav heading='Comapny Name' first="Home" second="About Us" third="Contact Us  " />
            
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='Aboutus' element={<Aboutus />} />
            <Route exact path='Contactus' element={<Contactus />} />
            <Route exact path='Home/ProductsC' element={<ProductsC />} />
            <Route exact path='SearchBar' element={<SearchBar />} />
            <Route exact path='Home/ProductsC/Item' element={<Item />} />
            <Route exact path='ProductsC/Item' element={<Item />} />
            <Route exact path='ProductsC' element={<ProductsC />} />
            <Route exact path='Home/ProductsC/Products' element={<Products/>} />
            <Route exact path='Signup' element={<Signup/>} />
            <Route exact path='UserDetails' element={<UserDetails/>} />
            <Route exact path='ForgotPassword' element={<ForgotPassword/>} />
            <Route exact path='UserDetails/Change_Password' element={<Change_Password/>} />

            {/* <Route exact path='F' element={<F/>} /> */}
            <Route exact path="Login" element={<Login />}>
            </Route>
            <Route exact path="Home" element={<Home />} />
          </Routes>
          <Footer/>
        </Router>
        </UserStatesss>
</CartProvider>
      </header>
    </div>
  );
}

export default App;
