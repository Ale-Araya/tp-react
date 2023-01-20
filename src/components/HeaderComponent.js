import React from 'react';
import './css/header.css';

const HeaderComponent = () => {
    return(
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><span>Pizza</span><span>Crespo</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );   
}

export default HeaderComponent;