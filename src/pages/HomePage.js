
import React from 'react';
import './css/Home.css';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContactComponent from "../components/ContactComponent";

const HomePage = () => {
    return(
        <section className="container-fluid">
            <HeaderComponent />
            <div className="row justify-content-center home"></div>
            <div className="row justify-content-center">
                <div id="carouselExampleControls" className="col-12 container-c col-md-8 carousel slide" data-ride="carousel">
                    <h1>Nuestros productos</h1>
                    <div className="carousel-inner">
                        <div className="carousel-item carousel-img-1 active"></div>
                        <div className="carousel-item carousel-img-2"></div>
                        <div className="carousel-item carousel-img-3"></div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    <a href="/productos"><button type="button" className="btn btn-primary btn-comprar">Comprar ahora!</button></a>
                </div>
            </div>
            <ContactComponent />
            <FooterComponent />
        </section>
    );   
}

export default HomePage;