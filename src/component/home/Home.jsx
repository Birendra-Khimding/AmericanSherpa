import React from 'react'
import Hero from '../../video/hero video.mp4'
import './home.css'
import nature from '../../images/night.jpg'
import park from '../../images/park.jpg'
import chairs from '../../images/chairs.jpg'
import MyCarousel from '../carousel/MyCarousel'
import Poster from '../contentPoster/Content'
import Night from '../../images/night.jpg'
import Nature from '../../images/nature.jpg'
import Gathering from '../../images/gathering.jpg'
import { Link } from 'react-router-dom'
import blogData from '../blogData/data'
import ScrollTop from '../scrollToTop/ScrollTop'

const featuredBlogs = blogData.filter(blog => blog.feature);




const slides = [
  <Link  to='/blog'>
  <div className='slideContent'>
  <h2>Slide 1 Header</h2>
  <img  src={nature} alt="Slide 1" />
</div>
</Link>,
<Link  to='/blog'>
<div className='slideContent'>
  <h2>Slide 2 Header</h2>
  <img src={park} alt="Slide 2" />
</div>
</Link>,
<Link  to='/blog'>
<div className='slideContent'>
  <h2 >Slide 3 Header</h2>
  <img src={chairs} alt="Slide 3" />
</div>
</Link>,
<Link  to='/blog'>
<div className='slideContent'>
  <h2 >Slide 4 Header</h2>
  <img src={nature} alt="Slide 4" />
</div>
</Link>,

<Link  to='/blog'>
<div className='slideContent'>
  <h2>Slide 2 Header</h2>
  <img src={park} alt="Slide 2" />
</div>
</Link>,

];
const Home = () => {
  ScrollTop();
  return (
    <div className='home'>
    <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src={Hero} type="video/mp4" />
  </video>
  <div className='overlay'>
    <div className='homeHeroTitle'>
  <h1>Welcome to American Sherpa!</h1>
  <p>Discover the best of both worlds at American Sherpa. We're your one-stop 
    destination for all your shopping needs, and we also offer insightful blogs to enrich your knowledge and lifestyle.</p>
    </div>
    <div className="homeHerocontainer">
    <div className="productHero">
    <h2>Explore Our Products</h2>
   <p>From electronics to fashion, home essentials to gifts, 
    we've got it all. Explore our vast collection of high-quality 
    products and find exactly what you're looking for.</p>
    <Link to="/shop" >Shop Now</Link>
    </div>
   <div className="blogHero">
   <h2>Stay Informed with Our Blog</h2>
      <p>Looking for tips, advice, or inspiration? Check out our 
        blog for the latest trends, expert insights, and practical guides. 
        Whether it's travel, technology, or lifestyle.</p>
        <Link to="/blog" >Read Our Blog</Link>
   </div>
   </div>
        </div>
  <div className='title'>
  <h3>Blog Categories</h3>
  </div>
  <div className='carouselContainer'>
  <MyCarousel slides={slides} />
  </div>
  <div className='title'>
  <h3>Featured Blogs</h3>
  </div>
  <div className='posterContainer'>
  {featuredBlogs.map(blog => (
          <div className="featuredBlog" key={blog.id}>
            <Poster
              imageUrl={blog.image}
              title={blog.title}
              paragraph={blog.content.slice(0, 100)} // Displaying first 100 characters
              link={`/blog/${blog.id}`} // Link to the respective blog page
            />
          </div>
        ))}
  </div>

  </div>
  )
}

export default Home