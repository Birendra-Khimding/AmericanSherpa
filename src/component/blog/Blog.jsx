import React from 'react'
import './blog.css'
import MyCarousel from '../carousel/MyCarousel'
import { Link } from 'react-router-dom'
import blogData from '../blogData/data'
import Hero from '../../images/nature.jpg'
import ScrollTop from '../scrollToTop/ScrollTop'

const categorySlides = blogData.map(blog => (
  <Link to={`/blog/${blog.id}`} key={blog.id} className='blogContent'>
    <img src={blog.image} alt={`Slide ${blog.id}`} />
    <h3>{blog.title}</h3>
    <p>{blog.content.slice(0, 100)}...</p> {/* Display a snippet of the blog content */}
  </Link>
));

const Blog = () => {
  ScrollTop();
  const handleScroll = () => {
    const blogSection = document.getElementById('blog-section');
    if (blogSection) {
      window.scrollTo({
        top: blogSection.offsetTop - 80, // Adjust the offset value
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='blog'>
      <div className='blogHero'>
      <img src={Hero} alt="background" />
      </div>
      <div className="heroContent">
      <h1>Discover Advice on Travel, Tech, and More</h1>
    <p>Explore a variety of topics with in-depth guides, latest trends, and practical tips to enrich your knowledge.</p>
    <ul className="key-topics">
      <li>Travel Tips</li>
      <li>Tech Innovations</li>
      <li>Lifestyle Hacks</li>
    </ul>
      </div>
      <div className='heroBtn'>
      <button onClick={handleScroll} className="cta-button">Explore Our Blogs</button>
      </div>
      <section className='blogContent' id='blog-section'>
      <div className='blogCarousel'>
      <h1> CATEGORY</h1>
       <MyCarousel slides = {categorySlides} nItems = {4}/>
      </div>
      <h1> CATEGORY</h1>
      <div className='blogCarousel'>
       <MyCarousel slides = {categorySlides} nItems = {4}/>
      </div>
      <h1> CATEGORY</h1>
      <div className='blogCarousel'>
       <MyCarousel slides = {categorySlides} nItems = {4}/>
      </div>
      </section>
    </div>
  )
}

export default Blog