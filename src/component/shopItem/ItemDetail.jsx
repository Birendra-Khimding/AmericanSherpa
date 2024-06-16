import React,  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.css'
import CartPopup from '../cartPopup/CartPopup';
import ScrollTop from '../scrollToTop/ScrollTop';


const ItemDetail = ({addToCart , shopData}) => {
  const { id } = useParams();
  console.log("itemId:", id);
  const item = shopData.find(item => item.id=== parseInt(id));

  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [colorSelected, setColorSelected] = useState(false); // Track if color is selected
  const [sizeSelected, setSizeSelected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({ color: '', size: '' });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (item && item.image && item.image.length > 0) {
      setMainImage(item.image[0]);
    }
  }, [item]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColorSelected(true);
    setSelectedOptions({ ...selectedOptions, color });
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeSelected(true);
    setSelectedOptions({ ...selectedOptions, size });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!selectedColor || !selectedSize) {
      setErrorMessage(true);
    return; 
    }
    if (item && selectedColor && selectedSize && mainImage) {
      addToCart({ ...item, selectedColor, selectedSize , mainImage});
      setShowPopup(true);
    }
  };
const handleCloseError = () =>{
  setErrorMessage(false);
}
  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='productDetail'>
      <div className='imgContainer'>
      <img className='mainImage' src={mainImage} alt={item.name} />
      <div className='thumbnailContainer'>
          {item.image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${item.name} ${index + 1}`}
              className='thumbnail'
              onClick={() => setMainImage(image)} // Update the main image on click
            />
          ))}
        </div>
      </div>
      <div className='infoContainer'>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p className='price'>Price: ${item.price.toFixed(2)}</p>
      <form onSubmit={handleAddToCart} className='optionsForm'>
        <div className="optionContainer">
          <div className='colorOptions'>
            <label>Color:</label>
            <div className='colorSelection'>
              {item.colors.map((color, index) => (
                <button
                  type="button"
                  key={index}
                  className={`colorOption ${color}-btn ${selectedColor === color ? 'selected' : ''}`}
                  disabled={selectedColor === color}
                  onClick={() =>handleColorSelect(color)}
                >

                </button>
              ))}
            </div>
          </div>

          <div className='sizeOptions'>
            <label>Size:</label>
            <div className='sizeSelection'>
              {item.sizes.map((size, index) => (
                <button
                  type="button"
                  key={index}
                  className={`sizeOption ${selectedSize === size ? 'selected' : ''}`}
                  disabled={selectedSize === size}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          </div>

          <button type='submit' className='addToCartButton'>Add to Cart</button>
        </form>
        <div className="itemInfo">
          <p>{item.info}</p>
        </div>
        {showPopup && <CartPopup item={item} selectedOptions={selectedOptions}  onClose={handleClosePopup} />}
        {errorMessage && <div className='itemErrorMessage'>
          <div className='errorContainer'>
          <button className="errorCloseButton" onClick={handleCloseError}>x</button>
          <h3>Please Select Size and Color</h3></div>
          </div>}
      </div>
    </div>
  );
};

export default ItemDetail;
