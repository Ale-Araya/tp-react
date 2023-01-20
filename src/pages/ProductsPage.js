
import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const ProductsPage = () => {
    return(
        <section className="container-fluid">
            <HeaderComponent />
            <h1>Product Page</h1>
            <FooterComponent />
        </section>
    );   
}

export default ProductsPage;