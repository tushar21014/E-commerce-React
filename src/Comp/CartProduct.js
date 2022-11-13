import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/cartContext';
import { getProductData, tushar } from './Mainitems';

const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
  return (
    <>
    <h3>{productData.Title}</h3>
    <p>{(quantity * productData.Price).toFixed(2)}</p>
    <Button size="sm" onClick={()=> cart.deleteFromCart(id)}>Remove </Button>
    <hr></hr>
    </>
    )
}

export default CartProduct