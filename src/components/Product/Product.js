import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div className="image">
            <img src={img} alt=""/>
            </div>
            <div >
            <h4 className="name">{name}</h4>
            <br/>
            <p>by:{seller}</p>
            <br/>
            <p>${price}</p>
            <br/>
            <p>only {stock} left in stock - order soon</p>
            <button className="btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
         
        </div>
        
    );
};

export default Product;