import './App.css';
import Nav from '../src/Comp/Nav';
// import Cards from './Comp/Cards';
import React, { useState } from 'react'
import CardsContainer from './Comp/CardsContainer';
// import Slideshow from './Comp/Slideshow';
import List from './Comp/List';
import Form from './Comp/Form';




function App() {
  const [Text, setText] = useState("")
  let inputhandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setText(lowercase)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav heading='Comapny Name' first="first" second="second" third="third" />
        <form className="form-inline my-2 my-lg-0" >
          <input className="form-control mr-sm-2" type="search" onChange={inputhandler} placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {/* <Slideshow/> */}
        <CardsContainer />
        <List input={Text} />
        <Form/>
      </header>
    </div>
  );
}

export default App;
