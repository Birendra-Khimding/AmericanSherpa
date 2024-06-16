
import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import Blog from './component/blog/Blog'
import Shop from './component/shop/Shop'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Cart from './component/cart/Cart'
import Login from './component/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetail from './component/blogDetail/BlogDetail'
import ItemDetail from './component/shopItem/ItemDetail'
import shopData from './component/shopData/ShopData';
import { useState,useEffect } from 'react'


function App() {

  const [cart, setCart] = useState(() => {
    // Load cart data from sessionStorage if available
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedSize === item.selectedSize
    );

    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const onIncreaseQuantity = (item) => {
    const newCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.selectedColor === item.selectedColor && cartItem.selectedSize === item.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(newCart);
  };


  const onDecreaseQuantity = (item) => {
    const newCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.selectedColor === item.selectedColor && cartItem.selectedSize === item.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 } // Ensure quantity does not go below 1
        : cartItem
    );
    setCart(newCart);
  };

  const onRemoveItem = (itemToRemove) => {
    const newCart = cart.filter((item) => !(item.id === itemToRemove.id && item.selectedColor === itemToRemove.selectedColor && item.selectedSize === itemToRemove.selectedSize));
    setCart(newCart);
  };

  return (
    <>
    < BrowserRouter>
<Header />
    <Routes>
       <Route path="/" element = {< Home />} />
       <Route path="/blog" element = {< Blog />} />
       <Route path="/blog/:id" element={<BlogDetail />} />
       <Route path="/shop" element = {< Shop />} />
       <Route path="/shop/:id" element = { < ItemDetail addToCart = {addToCart}  shopData = {shopData}/>}  />
       <Route path="/about" element = {< About />} />
       <Route path="/contact" element = {< Contact />} />
       <Route path="/cart" element = {< Cart  cart = {cart} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} onRemoveItem={onRemoveItem}/>} />
       <Route path="/login" element = {< Login />} />
    </Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
