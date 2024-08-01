import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
