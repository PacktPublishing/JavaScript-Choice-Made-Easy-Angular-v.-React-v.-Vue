import React, { Component } from 'react';
import './styles.css';

class Cart extends Component {
    componentWillReceiveProps(newProps) {
        this.total = newProps.products.reduce((a, b) => a + b.price, 0);
    }

    render() {
        return (
            <div className="Cart">
                <div className="Cart-button" onClick={this.props.onCartButtonClick}>🛒 CART ({this.props.products.length})</div>

                <div className={`Cart-expanded-area ${this.props.isExpanded ? 'expanded' : ''}`}>
                    {this.props.products.map((product, index) => (
                        <div className="Cart-expanded-area-product" key={index}>
                            <div className="Cart-expanded-area-product-image">
                                <img src={product.image} />
                            </div>
                            <br/>
                            <div className="Cart-expanded-area-product-title">{product.name} ({product.price}.00$) &nbsp;<span style={{cursor: 'pointer'}} onClick={() => this.props.onProductRemoveButtonClick(product.id)}>❌</span></div>
                        </div>
                    ))}

                    <br/><br/>
                    <div className="Cart-expanded-area-total">
                        Total: <b>{this.total}.00$</b>
                    </div>
                    <br/>
                    <div className="Cart-checkout-button">Checkout</div>
                </div>
            </div>
        );
    }
}

export default Cart;