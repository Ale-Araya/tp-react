
import React, {useEffect, useState} from 'react';
import './css/Products.css';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContactComponent from "../components/ContactComponent";
import axios from "axios";
import {URL_BASE_BE} from "../Constant";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${URL_BASE_BE}/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return(
        <section className="container-fluid">
            <HeaderComponent />
            <div className="row justify-content-center align-items-center container-def">
                <div className="col-12 container-c products-title">
                    <h1>Nuestros productos</h1>
                </div>
                {products.map(product => (
                    <div className="card col-12 col-md-6 col-lg-4">
                        <div className="img-item" style={{backgroundImage: `url(${product.img})` }}></div>
                        <div className="card-body">
                            <h5 className="card-title">{product.name} - ${product.price}</h5>
                            <p className="card-text">{product.description}</p>
                            <button href="#" className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>

            <ContactComponent />
            <FooterComponent />
        </section>
    );   
}

export default ProductsPage;