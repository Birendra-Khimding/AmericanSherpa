import React from 'react';
import './cartPopup.css'
import { Link } from 'react-router-dom';

const CartPopup = ({ item, onClose,selectedOptions  }) => {
  return (
    <div className="popupOverlay">
      <div className="popupContent">
      <button className="closeButton" onClick={onClose}>x</button>
        <h2>Item added to cart!</h2>
      <div className="popupInfo">
        <img src= {item.mainImage} />
        <div className='popupList'>
        <p>{item.name}</p>
        <p>{selectedOptions.color}</p>
        <p>{selectedOptions.size}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        </div>
        </div>
        <div className="popupActions">
        <Link to="/cart" className="popupButton">View Cart</Link>
          <Link to="/checkout" className="popupButton">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;

