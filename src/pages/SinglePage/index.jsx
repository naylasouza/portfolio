import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Introduction from '../../components/Introduction';
import ProductCategories from '../../components/ProductCategories';
import Timeline from '../../components/TimeLine';
import './style.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Introduction />
            <ProductCategories />
            <Timeline />
        </div>
    );
};

export default App;
