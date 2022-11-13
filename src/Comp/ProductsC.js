import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BuyC from './BuyC';
import { x } from './CardsC';
import Item from './Item';

import PropTypes from 'prop-types'

import { tushar } from './Mainitems';
import Products from './Products';
import Spinner from './Spinner';
import { usePagination } from 'use-pagination-hook';
var y;
var l;
const handleId = (event) => {
    y = event.currentTarget.id;
    console.log(y);
}
// const { current, pages, display, next, previous } = usePagination({ items: props.items, size: props.size });

export var y

export class ProductsC extends Component {

    static defaultProps = {
        Title: "Computers",
        pageSize: 6
    }
    static propTypes = {
        Title: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            tushar,
            page: 1,
            loading: false
        }
    }

    handleNext = async () => {
        console.log("Next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/l ))
        {

        } 
        this.setState({ loading: true })
        // let data = await fetch(url)
        this.setState({
            page: this.state.page + 1,
            loading: false
        })
    }
    handlePrev = async () => {
        console.log("Prev")
        // let url = 'https://i.gadgets360cdn.com/products/large/dell-g15-2251-db-964x800-1652701458.jpg?downsize=*:180'
        this.setState({ loading: true })
        this.setState({
            page: this.state.page - 1,
            loading: false
        })

    }
    render() {
        const filtered = tushar.filter((obj) => {
            return obj.id === x;
        })
        return (
            <div>
                <div>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && filtered.map((obj, a) => {
                        return <div key={obj.id}>
                            <div>
                                <center><h2>
                                    {obj.Title}
                                </h2>
                                </center>
                                {obj.Brands.map((obj, b) => {

                                    return <div className='row' key={obj.id}>
                                        <div className='col-4 my-2' id='productsimages'>
                                            <div id='fit'>
                                                <img id='productimage' src={obj.image1} />
                                            </div>
                                        </div>
                                        <div className='col-8 my-2' id='productsdetails'>
                                            <h2>{obj.Title} ( {obj.Specification} )</h2>
                                            <p>{obj.Desc}</p>
                                            &#8377;{obj.MRP}
                                            <br></br>
                                            <Link to="Item" id={obj.id} onClick={handleId} className="btn btn-primary btn-sm" >Buy Now</Link>
                                        </div>
                                    </div>
                                }
                                ).slice(0, 3)}
                            </div>
                        </div>
                    })}
                    {filtered.map((obj, a) => {
                        return l = obj.Brands.length;
                    })}


                    <div className="d-flex justify-content-around">
                        <input className={`btn btn-primary ${this.state.page <= 1 ? "disabled" : ""}`} disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} value="&larr; Previous" />
                        <input className="btn btn-primary " type="button" onClick={this.handleNext} value=" Next &rarr; " />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsC
export var filtered