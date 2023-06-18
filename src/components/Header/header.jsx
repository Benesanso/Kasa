import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png';
import './header.scss';

function Header(){
    return(
    <header className="container">
        <Link to="/">
        <img className='LOGO' src={logo} alt="logo Kasa" />
        </Link>
        <nav className='navbar'>
            <Link className='link-nav' to="/">Accueil</Link>
            <Link className='link-nav' to ="/About">À propos</Link>
        </nav>
    </header>
  );
  }
  export default Header;
