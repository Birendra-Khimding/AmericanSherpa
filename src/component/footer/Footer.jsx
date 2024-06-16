import React from 'react'
import './footer.css'
import Facebook from '../../images/facebook.png'
import Insta from '../../images/insta.png'
import Tiktok from '../../images/tiktok.png'
import Youtube from '../../images/youtube.png'
import logo from '../../images/logo-2.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='socialMedia'>
      <span  className='leftLine'/>
     <img src={Facebook} alt="Face book" />
     <img src={Insta} alt="Face book" />
     <img src={Tiktok} alt="Face book" />
     <img src={Youtube} alt="Face book" />
     <span  className='rightLine'/>
     </div>

     <div className="footerLogo">
     <img src={logo} alt="Logo" />
     </div>


    </div>
  )
}

export default Footer