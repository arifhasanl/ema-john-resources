import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prodect.css'
const Prodect = (props) => {
    // const {img,name,price,seller,​ratings}=props.prodect
    const {img,name,price,seller,ratings}=props.prodect;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='prodect'>
            
            <img src={img} alt="" />
            <div className='prodect-content'>
                <h4>Name:{name}</h4>
                <h5>Price:{price}</h5>
                <p className='seller'>Manufecture:{seller}</p>
                <p>Ratings:{ratings} start</p>
                <button onClick={()=>handleAddToCart(props.prodect)}>add too cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Prodect;