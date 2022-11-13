import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';
import CartProduct from './CartProduct';
import TypeWriter from './TypeWriter';



const Nav = () => {

    const cart = useContext(CartContext);
    let navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    let location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/Signup')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Awaizon</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${location.pathname === "/Home" ? "active" : ""}`}>
                            <Link className="nav-link" to="./Home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/Aboutus" ? "active" : ""}`}>
                            <Link className="nav-link" to="./Aboutus">About</Link>
                        </li>
                    </ul>
                    <div className='blas'>
                        <span className='auto-typed'>
                            <TypeWriter />
                        </span>
                    </div>
                    {!localStorage.getItem('token') ? <form className="form-inline my-2 my-lg-0 ">
                        <Link className="btn btn-primary mx-2" to="/Login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to='/Signup' role="button">Sign Up</Link>
                    </form> : <span>
                        <Link className="btn btn-primary mx-2" to='/UserDetails' role="button">User Details</Link>
                        <button onClick={handleLogout} className='btn btn-primary'>Log Out</button>
                        <Button onClick={handleShow} className="mx-2">Cart {productsCount} items</Button>


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Shopping cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {productsCount > 0 ?
                                    <>
                                        <h1>Items in your cart: </h1>
                                        {cart.items.map((obj,idx) => (
            <CartProduct id={obj.id} quantity={obj.quantity} key={idx}></CartProduct>

))}

        <h1>Total : {cart.getTotalCost().toFixed(2)}</h1>
                                        <Button variant="success">Purchase Items</Button>
                                    </>
                                    :

                                    <h1>There are no products in your Cart</h1>

                                }
                            </Modal.Body>
                        </Modal>
                    </span>}
                </div>
            </nav>
        </div>
    )
}

export default Nav