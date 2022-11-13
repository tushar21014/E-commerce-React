import React, { Component } from 'react'
import { x } from './CardsC'
import { tushar } from './Mainitems'
import BuyC from './BuyC';
import { y } from './ProductsC';

export class Item extends Component {
    constructor() {
        super();
        this.state = {
            tushar
        }
    }
    render() {
        console.log(y);
        const filtered = tushar.filter((obj, a) => {
            return obj.id === x;
        })
        return (
            <div>
                {filtered.map((obj, x) => {
                    return <div key={obj.id}>
                        {obj.Brands.filter(obj => obj.id === y).map(filteredBrands => {
                            return <div key={filteredBrands.id}>
                                <BuyC id={filteredBrands.id} title={filteredBrands.Title} desc={filteredBrands.Desc} content={filteredBrands.Content} url={filteredBrands.url} button={filteredBrands.id} image1={filteredBrands.image1} image2={filteredBrands.image2} specifications={filteredBrands.Specification}
                                    deal_price={filteredBrands.Deal_price} mrp={filteredBrands.MRP} offer1={filteredBrands.Offer1} offer1content={filteredBrands.Offer1content} model={filteredBrands.ModelName} brand={filteredBrands.Brand} display={filteredBrands.Display}
                                    battery={filteredBrands.Battery} design={filteredBrands.Design}
                                />
                            </div>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

export default Item