import React from 'react';
import { Fade } from 'react-reveal';
import './index.css';
import perfil from '../../imagens/perfil.png';

const Introduction = () => {
    return (
        <section className="introduction">
            <Fade right>
                <div className="intro-text">
                    <p>Dedicada a criar interfaces intuitivas e funcionais, sempre focada em proporcionar a melhor experiência ao usuário. Tenho experiência em desenvolvimento de aplicações web utilizando Javascript, React, TypeScript, HTML e SASS, com atenção à fidelidade do design, responsividade e usabilidade. Experiência com consultas em coleções do MongoDB para gerenciamento de dados</p>
                </div>
            </Fade>
            <div className="intro-image">
                <img src={perfil} alt="Perfil" className="profile-image" />
            </div>
        </section>
    );
};

export default Introduction;
