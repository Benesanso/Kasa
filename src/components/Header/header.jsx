import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png';
import './header.scss';

function Header(){
    return(
        <header className="container">
            {/* Logo avec un lien vers la page d'accueil */}
            <Link to="/">
                <img className='LOGO' src={logo} alt="logo Kasa" />
            </Link>
            {/* Navigation entre les pages */}
            <nav className='navbar'>
                {/* Lien vers la page avec une classe active si l'URL */}
                <Link className={`link-nav ${window.location.pathname === '/' ? 'active' : ''}`} to="/">Accueil</Link>
                <Link className={`link-nav ${window.location.pathname === '/About' ? 'active' : ''}`} to="/about">À propos</Link>
            </nav>
        </header>
    );
}
export default Header;
