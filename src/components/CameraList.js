import React from 'react'
import '../styles/CameraList.css';

const CameraList = ({ img, name, price, rate, id, addToCart, onSale }) => {

    let tagClassName = ""
    if ( onSale === true ){ tagClassName = "sale_tag" }

    return (
        <div className="Card">
            <div className="img-frame mb-2">
                <img src={ img } alt="cameraImage" />
            </div>
            <div className="cart-content">
            <span className={tagClassName} >{ onSale === true && "On Sale" }</span>
                <div>{ name }</div>
                <div>${ price }</div>
                {/* <div>{ rate }</div> */}
                <button onClick={() => addToCart(id)} className="card_action">
                Add to Cart
                </button>
            </div>
        </div>
    )
}

export default CameraList
