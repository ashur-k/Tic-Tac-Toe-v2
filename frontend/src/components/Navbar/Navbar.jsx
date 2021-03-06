import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assests/TicTAcToe-logo.jpg'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='navbar-links-container'>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/two-players-game'>Two Players Game</Link></p>
          <p><Link to='/ai-mode'>Against Computer</Link></p>
          <p><Link to='/about-me'>About me</Link></p>
          <p><Link to='/contact-me'>Contact me</Link></p>
        </div>
      </div>
      <div className="navbar-menu">
          {
            toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {
            toggleMenu && (
              <div className="navbar-menu-container scale-up-center">
                <div className="navbar-menu-container-links">
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/two-players-game'>Two Players Game</Link></p>
                <p><Link to='/ai-mode'>Against Computer</Link></p>
                <p><Link to='/about-me'>About me</Link></p>
                <p><Link to='/contact-me'>Contact me</Link></p>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar