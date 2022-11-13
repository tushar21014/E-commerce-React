import React, { Component } from 'react'
import BuyC from './BuyC'
import { x } from './CardsC'
import { tushar } from './Mainitems'

export class Buy extends Component {
  constructor() {
    super();
    this.state = {
      tushar
    }
  }
  render() {
    const filtered = tushar.filter(obj => {
      return obj.id === x;
    })
    return (
      <div>
        {filtered.map(obj => {
          return <div key={obj.id}>
            <BuyC id={obj.id} title={obj.Title} desc={obj.Desc} content={obj.Content} url={obj.url} button={obj.id} image1 = {obj.image1} image2 = {obj.image2} specifications = {obj.Specification}
            deal_price = {obj.Deal_price} mrp = {obj.MRP} offer1 = {obj.Offer1} offer1content = {obj.Offer1content.slice(0,50)} model = {obj.ModelName} brand = {obj.Brand} display = {obj.Display}
            battery = {obj.Battery} design = {obj.Design}
            />

          </div>
        })}
      </div>
    )
  }
}

export default Buy