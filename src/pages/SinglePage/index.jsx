import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Introduction from '../../components/Introduction';
import Timeline from '../../components/TimeLine';
import Skills from "../../components/Skills"
import './style.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Introduction />
            <Skills />
            <Timeline />
        </div>
    );
};

export default App;
