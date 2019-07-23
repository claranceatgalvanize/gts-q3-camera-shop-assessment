import React from 'react';
import { Button } from 'reactstrap';
import '../styles/Cart.css'
import { ListGroup, ListGroupItem } from 'reactstrap';

const Cart = ({ cartItems, removeFromCart, tax, subtotal, total }) => {
    return (
        <div>
            {/* <h3>Cart</h3> */}
            <ListGroup className="mb-2">
                <ListGroupItem className="d-flex justify-content-between">
                    <span>Tax</span>
                    <span>${ tax }</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>${ subtotal }</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span>Total</span>
                    <span>${ total }</span>
                </ListGroupItem>
            </ListGroup>
            <Button color="dark btn-block" className="checkout_action btn-block">Checkout</Button>
            <ListGroup className="mt-4">
                { cartItems.map( (item, idx) => {
                    return (
                        <ListGroupItem className="d-flex justify-content-between" key={ idx }>
                        { item.name }
                        <i onClick={ () => removeFromCart(item.id) } className="fa fa-trash text-danger" aria-hidden="true"></i>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div> 
    )
}

export default Cart
