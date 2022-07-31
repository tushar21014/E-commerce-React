import React, { Component } from 'react'
import CardsC from './CardsC';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { tushar } from './Mainitems';
import Buy from './Buy';
export class CardsContainer extends Component {
    static defaultProps = {
        Title: "Computers",
        pageSize: 6
    }
    static propTypes = {
        Title : PropTypes.string,
        pageSize : PropTypes.number
    }
    
    constructor() {
        super();
        console.log("an object was created");
        this.state = {
            tushar,
            page: 1,
            loading: false
        }
    }
    handleNext = async () => {
        console.log("Next")
        let url = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'
        this.setState({ loading: true })
        let data = await fetch(url)
        this.setState({
            page: this.state.page + 1,
            loading: false
        })
    }
    handlePrev = async () => {
        console.log("Prev")
        let url = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'
        this.setState({ loading: true })
        this.setState({
            page: this.state.page - 1,
            loading: false
        })

    }

    render() {
        return (
            <div>
                <div className='h1 text-center my-2'>Products</div>
                {this.state.loading && <Spinner />}
                <div className='container my-4'>
                    <div className='row my-2'>
                        {!this.state.loading && this.state.tushar.map((element) => {
                            console.log(element)
                            return <div id='uniq' className='col-md-4 my-3' key={element.id}>
                                <CardsC title={element.Title} desc={element.Desc} content={element.Content} url={element.url} button={element.id}/>
                            </div>
                        })}
                    </div>
                    <div className='conatiner d-flex justify-content-between'>
                        <input className={`btn btn-primary ${this.state.page <= 1 ? "disabled" : ""}`} disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} value="&larr; Previous" />
                        <input className="btn btn-primary " type="button" onClick={this.handleNext} value=" Next &rarr; " />
                    </div>
                </div>

            </div>

        )
    }
}

{/* {this.state.tushar.map((element) => {console.log("hello")})} */ }
export default CardsContainer