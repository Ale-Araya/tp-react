
import React, {useEffect, useState} from 'react';
import './css/Products.css';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContactComponent from "../components/ContactComponent";
import axios from "axios";
import {URL_BASE_BE} from "../Constant";


const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [productsCarrito, setProductsCarrito] = useState([]);
    const [contadorItems, setContadorItems] = useState(0);
    useEffect(() => {
        axios.get(`${URL_BASE_BE}/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function addItem(product){
        let newProduct = Object.assign({auxId: contadorItems + 1}, product);
        setContadorItems(newProduct.auxId)
        setProductsCarrito([...productsCarrito, newProduct]);
    }
    function deleteItem(product){
        setProductsCarrito(productsCarrito.filter(elem => elem.auxId !== product.auxId));
    }


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
                            <button onClick={() => addItem(product)} className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>

            <ContactComponent />
            <FooterComponent />
            <div className="modal" tabIndex="-1" id="modal-carrito">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Carrito</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {productsCarrito.map(product => (
                                <li>{product.name} ${product.price} <a href="#" className="deleteItem" onClick={() => deleteItem(product)}>Eliminar</a></li>
                                ))}
                            </ul>
                            <h5>Total de la compra: ${productsCarrito.reduce((acumulador, objeto) => acumulador + objeto.price, 0)}</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom d-flex justify-content-end align-self-center">
                <button data-toggle="modal" data-target="#modal-carrito" className="btn btn-primary btn-floating">Carrito <span className="cantidad-items">{productsCarrito.length}</span></button>
            </div>
        </section>
    );   
}

export default ProductsPage;