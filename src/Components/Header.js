import React from 'react';
import Menu from './Menu.js';
import '../App.css';

function Header() {
  return (
    <>
      <div className="header">
        <img
          className="headerLogo"
          src="https://i.pinimg.com/originals/65/16/1b/65161b6d6a979698b493c02fb1a49494.jpg"
          alt="Image of Ollivanders Wand Shop log"
        />
      </div>
    </>
  );
}

export default Header;

// This header will display if the user is logged in
// There will also be a button to log out
