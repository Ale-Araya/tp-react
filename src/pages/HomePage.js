
import React from 'react';
import HeaderComponent from "../components/HeaderComponent";

const HomePage = () => {
    return(
        <section className="container-fluid">
            <HeaderComponent />
            <div className="row justify-content-center home red">
                <span>Home</span>
            </div>
        </section>
    );   
}

export default HomePage;