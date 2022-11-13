import React, { Component } from 'react'
import CardsContainer from './CardsContainer'
import Slidee from './Slidee'
export class Home extends Component {
  render() {
    return (
      <div>
        
        <Slidee/>
        <CardsContainer/>
      </div>
    )
  }
}

export default Home