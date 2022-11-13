import React, { Component } from 'react'
import CardsC from './CardsC';
import Spinner from './Spinner';
import { tushar } from './Mainitems';
import Buy from './Buy';

export class CardsContainer extends Component {
    constructor() {
        super();
        console.log("an object was created");
        this.state = {
            tushar,
            page: 1,
            loading: false
        }
    }

    // async componentDidMount(){
    //     console.log("Cdm");
    //     // let data = await fetch("http://localhost:8900/tushar");
    //     let parsedata = await data.json();
    //     console.log(parsedata);
    // }

    render() {
        return (
            <div>
                <div className='h1 text-center my-2'>Products</div>
                {this.state.loading && <Spinner />}
                <div className='container my-4'>
                    <div className='row my-2'>
                        {!this.state.loading && this.state.tushar.map((element) => {
                            return <div id='uniq' className='col-md-4 my-3' key={element.id}>
                                <CardsC image = {element.CardImage} button={element.id} product = {element}/>
                            </div>
                        })}
                    </div>
                </div>

            </div>

        )
    }
}

export default CardsContainer