import React from 'react';

import logo from '../../assests/tic-tac-toe.png'
import './Header.css'


const Header = ({ header_data }) => {
  console.log(header_data)
  return (
    <div className="header section-padding" id="home">
     
      {header_data.map((header) => (
        <div key={header.id} className="header-content">
          <h1 className="gradient-text">
            {header.name}
          </h1>
          <p>
             {header.description}
          </p>
        </div>
      ))}
      <div className="header-image">
        <img src={logo} alt="ai"/>
      </div>        
    </div>
  )
}

export default Header