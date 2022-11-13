import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import b from '../Context/cartContext'
import Buy from './Buy'
import CardsContainer from './CardsContainer'
import { tushar } from './Mainitems'
import ProductsC from './ProductsC'

var x;
const handleId = (event) => {
    x = event.currentTarget.id;
    console.log(x);
}

export var x;

export class CardsC extends Component {

    constructor() {
        super();
        this.state = {
            tushar
        }
    }
    render() {
        
        let { image, button,product } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.Title}</h5>
                        <p className="card-text">{product.Desc.slice(0,59)}...</p>
                        <Link to='./ProductsC' id={button} onClick={handleId} className="btn btn-primary btn-sm" >Buy Now</Link>
                        <a href="#" id='add' className="btn btn-primary btn-sm mx-2">Add To Cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsC 
