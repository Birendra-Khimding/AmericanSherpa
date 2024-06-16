import React from 'react'
import './shop.css'
import ShopData from '../shopData/ShopData'
import { Link } from 'react-router-dom';
import ScrollTop from '../scrollToTop/ScrollTop'
const Shop = () => {
  ScrollTop();
  return (
    <div className="shop">
      {ShopData.map(item => (
        <Link to={`/shop/${item.id}`} key={item.id} className="shop-item">
          <div className='shopItems'>
            <img src={item.mainImage} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Shop