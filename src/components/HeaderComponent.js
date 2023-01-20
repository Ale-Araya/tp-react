import React from 'react';
import './css/header.css';

const HeaderComponent = () => {
    return(
        <header className="row justify-content-center align-items-center">
            <div className="logo">Pizza<span>Crespo</span></div>
            <nav className="barra">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#sec1">Producto</a></li>
                    <li><a href="./pages/contacto.html">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );   
}

export default HeaderComponent;