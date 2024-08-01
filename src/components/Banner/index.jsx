import React, { useState, useEffect } from 'react';
import './index.css';
import bannerImage from '../../imagens/banner.png';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, text, speed]);

    return <span>{displayedText}</span>;
};

const Banner = () => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="banner-content">
                <h2><TypingEffect text="Oi, eu sou a Nayla" speed={100} /></h2>
                <h3><TypingEffect text="Front-end Developer" speed={100} /></h3>
                <button className="contact-button">Entrar em contato</button>
            </div>
        </section>
    );
};

export default Banner;
