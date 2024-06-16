import React from 'react'
import './about.css'
import Connection from '../../images/connection.png'
import Facebook from '../../images/facebook.png'
import Insta from '../../images/insta.png'
import Tiktok from '../../images/tiktok.png'
import Youtube from '../../images/youtube.png'
import Link from '../../images/link.png'
import ScrollTop from '../scrollToTop/ScrollTop'

const About = () => {
  ScrollTop();
  return (
    <div className='about'>
      <h1>Our Mission</h1>
      <div className="aboutInformation">
        <div className="story">
          <p>
          Across the sleepy town. Birds chirped happily in the trees, their songs echoing through the morning air. A gentle breeze danced through the streets, 
          carrying the scent of freshly bloomed flowers. People bustled about, each with their own destination in mind, as the day began to unfold with its promise 
          of adventure and possibility." across the sleepy town. Birds chirped happily in the trees, their songs echoing through the morning air. A gentle breeze danced 
          through the streets, carrying the scent of freshly bloomed flowers. People bustled about, each with their own destination in mind, as the day began to unfold with 
          its promise of adventure and possibility." across the sleepy town. Birds chirped happily in the trees, their songs echoing through the morning air. A gentle breeze 
          danced through the streets, carrying the scent of freshly bloomed flowers. People bustled about, each with their own destination in mind, as the day began to unfold 
          with its promise of adventure and possibility."
          </p>
        </div>
        <div className="aboutImage">
          <img src= {Connection} alt="Connection" />
        </div>
      </div>
      <div className="aboutConnect">
        <div className="connectImage">
          <img src={Link} alt="" />
        </div>
        <div className="connectLink">
          <div className="outerLink">
          <h3>Follow Us</h3>
          <div className="linkContainer">
         <div className="linkcontent">
          <img src={Facebook} alt="" />
          <img src={Youtube} alt="" />
          <img src={Tiktok} alt="" />
          <img src={Insta} alt="" />
         </div>
         <div className="linkName">
          <span>@facebook.com</span>
          <span>@youtube.com</span>
          <span>@tiktok.com</span>
          <span>@instagram.com</span>
         </div>
         </div>
         </div>
        </div>
      </div>
      </div>

  )
}

export default About