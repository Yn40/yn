import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'img/logo.svg';

const Header = () => {
  return (
    <header>
      <h1 className="logo"><Link to="/"><img src={logo} alt="Yn Logo"/></Link></h1>
      <nav className="gnb">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;