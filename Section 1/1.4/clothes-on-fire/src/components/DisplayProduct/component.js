import React from 'react';
import './styles.css';

function DisplayProduct({ product, onBuyButtonClick }) {
    return (
        <div className="DisplayProduct">            
            <div className="DisplayProduct-image">
                <img src={product.image} />
            </div>
            <br/>
            <div className="Cart-checkout-button" onClick={() => onBuyButtonClick(product.id)}>BUY {product.name} ({product.price}.00$)</div>
        </div>
    );
}

export default DisplayProduct;