import React, { useEffect } from 'react';
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ cart, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  

  return (
    <div className='cartItems'>

      <h1>Cart</h1>
      <div className="cartContainer">
        <div className='cartList'>
          {cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <div className="cartImage">
                  <img src={item.mainImage} alt={item.name} />
                  </div>
                  <div className="cartListCtn">
                  <div className="cartDiscription">
                  <span className='impItems'>{item.name}:</span> 
                  <span>Color: {item.selectedColor}</span> 
                  <span> Size: {item.selectedSize}</span> 
                  <span className='impItems'>Price: ${item.price.toFixed(2)}</span>
                  </div>
                  <div className="cartButton">
                    <div className="btnControll">
                  <button onClick={() => onDecreaseQuantity(item)}>-</button>
                  <span className='quantity'>{item.quantity}</span>
                  <button onClick={() => onIncreaseQuantity(item)}>+</button>
                  </div>
                  <div className="btnRemove">
                  <button onClick={() => onRemoveItem(item)} className='removeButoon'>Remove</button>
                  </div>
                  </div>
                  </div>
                </li>
              ))}
            </ul>

          )}
        </div>
        <div className="cartItemTotal">
          <h3> Ordar Summary</h3>
          <div className='cartItemContainer'>
            <div className="subContainer">
              <span>Sub Total</span>
              <span>${total}</span>
            </div>
            <div className="subContainer">
              <span>Shipping</span>
              <span>TBD</span>
            </div>
            <div className="subContainer">
              <span>Est. Tax:</span>
              <span>TBD</span>
            </div>
            <hr/>
            <div className="subContainer">
              <span>Order Total</span>
              <span>${total}</span>
            </div>
          </div>
          
          <Link to="/checkout" className='orderCheckout'>CHECKOUT</Link>
        </div>

      </div>
    </div>
  );
};

export default Cart;