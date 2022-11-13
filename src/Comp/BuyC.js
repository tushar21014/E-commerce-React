import React, { Component } from 'react'
import { tushar } from './Mainitems'

export class BuyC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mrp: this.props.mrp,
            deal_price: this.props.deal_price,
            deal_price: this.props.deal_price,
            savings: this.props.mrp - this.props.deal_price,
            src: this.props.url

        }
    }
    changeimage1 = () => {
        console.log("Image changed to 1")
        this.setState({
            src: this.props.url
        })
    }
    changeimage2 = () => {
        console.log("Image changed to 2")
        this.setState({
            src: this.props.image1
        })
    }
    changeimage3 = () => {
        console.log("Image changed to 3")
        this.setState({
            src: this.props.image2
        })
    }
    readMore = () => {
        console.log("read more")

    }
    render() {
        let { title, id, desc, url, image1, image2, specifications, mrp, deal_price, offer1, offer1content, model, brand, design, battery, display } = this.props
        console.log(id);
        return (

            <div>
                <div id='parent'>
                    <div className='row'>
                        <div className='col-1' id='part1'>
                            <div className="d-flex flex-column">
                                <div className="p-2" ><img id='image1' alt='' onClick={this.changeimage1} src={url} /></div>
                                <div className="p-2"><img id='image2' alt='' onClick={this.changeimage2} src={image1} /></div>
                                <div className="p-2"><img id='image3' alt='' onClick={this.changeimage3} src={image2} /></div>
                            </div>
                        </div>

                        <div className='col-5' id='part2'>
                            <img id='col-2img' alt={this.state.alt} src={this.state.src} />
                        </div>
                        <div className='col-4' id='part3'>
                            <div className='h1 text-left'>
                                {title} ({specifications})
                            </div>
                            <p className='text-justify'> {desc}</p>
                            <div>
                                M.R.P : &#8377;<strike>{mrp}</strike> <br />
                                Deal Price : &#8377;{deal_price} <br />
                                You Save : &#8377;{this.state.savings}
                                <hr />
                                <b><p>Offers</p></b>
                                <div className="d-flex flex-row" id='offers-c'>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text' id='context'>{offer1content.slice(0,29)}...</p>
                                        <div id="readmore">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id='readmorebutton'>
                                                Read More...
                                            </button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">{offer1}</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {offer1content}
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text' id='context'>{offer1content.slice(0,29)}...</p>
                                        <div id="readmore">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id='readmorebutton'>
                                                Read More...
                                            </button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">{offer1}</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {offer1content}
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p" id='offers'>
                                        <b><p className='text-center'>{offer1}</p></b>
                                        <hr />
                                        <p className='text' id='context'>{offer1content.slice(0,29)}...</p>
                                        <div id="readmore">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id='readmorebutton'>
                                                Read More...
                                            </button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">{offer1}</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {offer1content}
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                    <b>About Product </b>
                                <div className='row'>
                                    <div>
                                        <ul>
                                            <li id='aboutproduct'>Brand: {brand}</li>
                                            <li id='aboutproduct'>Model: {model}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='manufacture'>
                    <div className='h2' id='fromthemanufacturer'>
                        From the manufacturer
                    </div>
                    <div className='first'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-5' id="firstmanleft">
                                    <img id='manufirst' src={url} />
                                </div>
                                <div className='col-7' id="firstmanright">
                                    <div className='firsttxt'>
                                        <p className='txt' id='firstrighttxt'>{brand}</p>
                                        <p id='firstrightdesc'>{desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-7' id="firstmanright">
                                    <div className='firsttxt'>
                                        <p className='txt' id='firstrighttxt'>{brand}</p>
                                        <p id='firstrightdesc'>{desc}</p>
                                    </div>
                                </div>
                                <div className='col-5' id="firstmanleft">
                                    <img id='manufirst' src={image1} />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-3' id='other'>
                                    <div id='head'>
                                        Design
                                    </div>
                                    {design}</div>
                                <div className='col-3' id='other'>
                                    <div id='head'>
                                        Battery
                                    </div>
                                    {battery}</div>
                                <div className='col-3' id='other'>
                                    <div id='head'>
                                        Display
                                    </div>
                                    {display}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='questionans'>
                    <hr/>   
                <h3>Customer questions & answers</h3>
                </div>
            </div>)
    }
}

export default BuyC