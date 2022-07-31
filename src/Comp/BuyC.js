import React, { Component } from 'react'
import { tushar } from './Mainitems'
export class BuyC extends Component {
    constructor(url) {
        super(url);
        this.state = {
            ra : {url}
        }

    }

    render() {
        let { title, id, desc, url, image1, image2, specifications, mrp, deal_price, offer1, offer1content, model, brand } = this.props

        return (

            <div>
                <div id='parent'>
                    <div className='row'>
                        <div className='col-1' id='part1'>
                            <div className="d-flex flex-column">
                                <div className="p-2" ><img id='image1' alt='' src={this.state.ra} /></div>
                                <div className="p-2"><img id='image2' alt='' src={image1} /></div>
                                <div className="p-2"><img id='image3' alt='' src={image2} /></div>
                                <button >Click me</button>
                            </div>
                        </div>

                        <div className='col-5' id='part2'>
                            <img id='col-2img' alt='' src={image1} />
                        </div>
                        <div className='col-4' id='part3'>
                            <div className='h1 text-left'>
                                {title} ({specifications})
                            </div>
                            <p className='text-justify'> {desc}</p>
                            <div>
                                M.R.P : &#8377;<strike>{mrp}</strike> <br />
                                Deal Price : &#8377;{deal_price} <br />
                                You Save :
                                <hr />
                                <b><p>Offers</p></b>
                                <div className="d-flex flex-row" id='offers-c'>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text-justify' id='context'>{offer1content}...</p>
                                    </div>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text-justify' id='context'>{offer1content}...</p>
                                    </div>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text-justify' id='context'>{offer1content}...</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <div className='col-4' id='aboutproduct'>
                                        <b>
                                            Model Name
                                            Brand Name
                                        </b>
                                    </div>
                                    <div className='col-4' id='aboutproduct' >

                                        {model}
                                        <br />
                                        {brand}

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-2' id='part4'>
                        </div>

                    </div>
                </div>
            </div>)
    }
}

export default BuyC