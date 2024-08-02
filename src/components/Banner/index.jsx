import React from 'react';
import './index.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <div className="developer-title left-text">
                    Front-End
                </div>
                <div className="developer-title right-text">
                    Developer
                </div>
                {/* <button className="contact-button">Entrar em contato</button> */}
            </div>
        </section>
    );
};

export default Banner;
