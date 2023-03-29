import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css'
const Shop = () => {
    const [prodects,setProdect]=useState([])
    const [carts,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProdect(data))
    },[])
    const handleAddToCart=(prodect)=>{
        const newCart=[...carts,prodect];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            
            <div className='prodect-container'>
                {
                    prodects.map(prodect=><Prodect prodect={prodect} key={prodect.id} handleAddToCart={handleAddToCart}></Prodect>)

                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected items:{carts.length}</p>
                {
                  <h1>Price:{carts.map(cart=><Cart cart={cart.price}></Cart>)}</h1>  
                }
            </div>
        </div>
    );
};

export default Shop;

