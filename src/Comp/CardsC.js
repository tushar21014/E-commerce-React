import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Buy from './Buy'
import CardsContainer from './CardsContainer'
import { tushar } from './Mainitems'

var x;
const handleId = (event) => {
    x = event.currentTarget.id;
    console.log(x);
}
export var x;
// export const handleId = handleId;
export class CardsC extends Component {
    constructor() {
        super();
        this.state = {
            tushar
        }
    }
    render() {
        let { desc, title, url, button } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <Link to='./Buy' id={button} onClick={handleId} className="btn btn-primary btn-sm" >Buy Now</Link>
                        <a href="#" id='add' className="btn btn-primary btn-sm mx-2">Add To Cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsC 
