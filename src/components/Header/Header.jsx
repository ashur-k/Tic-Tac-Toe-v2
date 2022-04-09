import React from 'react';

import './Header.css'


const Header = ({ header_data }) => {
  console.log(header_data)
  return (
    <>
      {header_data.map((header) => (
        <div key={header.id} className="header section-padding" id="home">
          <div className="header-content">
            <h1 className="gradient-text">
              {header.name}
            </h1>
            <p>
              {header.description}
            </p>
          </div>
          <div className="header-image">
            <img src={header.image} alt="ai"/>
          </div>        
        </div>
      ))}
    </>
      
  )
}

export default Header