import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'img/logo.svg';

const Header = () => {
  return (
    <header>
      <h1 className="logo"><Link to="/yn/"><img src={logo} alt="Yn Logo"/></Link></h1>
      <nav className="gnb">
        <ul>
          <li><Link to="/yn">HOME</Link></li>
          <li><Link to="/yn/about">ABOUT</Link></li>
          <li><Link to="/yn/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/yn/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;