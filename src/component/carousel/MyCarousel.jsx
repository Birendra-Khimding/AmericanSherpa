import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './myCarousel.css'

const MyCarousel = ({ slides , nItems}) => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: nItems || 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        dotListClass="custom-dot-list-style"
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ cursor: 'pointer' }}>
            {slide}
          </div>
        ))}
      </Carousel>
    );
  };

  export default MyCarousel;