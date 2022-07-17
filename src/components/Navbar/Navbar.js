import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='container'>
                    <div className='logo'>
                        <img src={'images/logo.png'} alt='logo de la tienda'/>
                    </div>
                    <div className='menu-items'>
                        <li>MOTHERBOARD</li>
                        <li>PROCESADORES</li>
                        <li>ALMACENAMIENTO</li>
                        <li>MONITORES</li>
                    </div>
                    <div>
                        <CartWidget />
                    </div>  
                </div>
            </div>
        </nav>
    )
}

export default Navbar;