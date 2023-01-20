
import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const ProductsPage = () => {
    return(
        <section>
            <HeaderComponent />
            <div className="container-fluid">
                <br/><br/><br/><br/>
                <h1>Product Page</h1>
                <FooterComponent />
            </div>
        </section>
    );   
}

export default ProductsPage;