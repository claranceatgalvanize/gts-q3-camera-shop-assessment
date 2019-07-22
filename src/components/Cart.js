import React from 'react';
import { Button } from 'reactstrap';

const Cart = () => {
    return (
        <div>
            <h3>Cart</h3>
            <div className="row">
                <div className="col-md-8 text-right">Subtotal </div>
                <div className="col-md-4 mb-1">$0.00{ }</div>
            </div>
            <div className="row">
                <div className="col-md-8 text-right">Tax </div>
                <div className="col-md-4 mb-1">$0.00{ }</div>
            </div>
            <div className="row">
                <div className="col-md-8 text-right">Total </div>
                <div className="col-md-4 mb-1">$0.00{ }</div>
            </div>
            <Button color="dark btn-block">Checkout</Button>
        </div> 
    )
}

export default Cart
