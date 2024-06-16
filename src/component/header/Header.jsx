import React, { useEffect, useState, useRef   } from 'react'
import logo from '../../images/logo-2.png'
import './header.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
        setIsOpen(false);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


    // Handle clicks outside the menu to close it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuRef]);


  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';
  const navClassName = isHomePage || isBlogPage ? '' : 'not-home';
  const openClassName = isOpen ? 'open' : '';

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''} `}>
     <nav className={`${navClassName} ${openClassName}`} ref={menuRef}>
      <ul>
        <div className='left'>
        <li><Link to="/"><img src={logo} alt="Logo" /></Link></li>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        <div className={`center ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/blog" onClick={handleLinkClick}>Blogs</NavLink></li>
        <li><NavLink to="/shop" onClick={handleLinkClick}>Shop</NavLink></li>
        <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
        </div>
        <div className='right'>
        <li><Link to="/cart" className='cart'>Cart</Link></li>
        <li><Link to="/login" className='login'>LogIn</Link></li>
        </div>
      </ul>
      
    </nav>
    </div>
  )
}

export default Header