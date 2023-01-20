import React from 'react';
import './css/contact.css';

const ContactComponent = () => {
    return(
        <div id="contacto" className="row justify-content-center align-items-center">
            <div className="container-c col-12">
                <h2>Contacto</h2>
            </div>
            <div className="col-12 col-md-6 info">
                <span>PIZZA CRESPO</span>
                <span>Av. Corrientes 6080, C1414 CABA</span>
                <span>Tel: 011 4092-4426</span>
                <span>Email: info@pizzacrespo.com.ar</span>
            </div>
            <div className="col-12 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4464886196297!2d-58.4463553!3d-34.5928696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d6e8995807%3A0xa04901a4fd6ef9c8!2sPIZZA%20CRESPO!5e0!3m2!1ses!2sar!4v1674242014055!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default ContactComponent;