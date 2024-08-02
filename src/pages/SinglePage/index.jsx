import React from 'react';
import Banner from '../../components/Banner';
import Introduction from '../../components/Introduction';
import Timeline from '../../components/TimeLine';
import Skills from "../../components/Skills"
import './style.css';
import Footer from '../../components/Footer';

const App = () => {
    return (
        <div className="App">
            <Banner />
            <Introduction />
            <Skills />
            <Timeline />
            <Footer/>
        </div>
    );
};

export default App;
