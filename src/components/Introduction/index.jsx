import React from 'react';
import { Fade } from 'react-reveal';
import './index.css';
import perfils from '../../imagens/perfils.png';

const Introduction = () => {
    return (
        <section className="introduction">
            <div className="intro-image">
                <img src={perfils} alt="Perfil" className="profile-image" />
            </div>
            <Fade right>
                <div className="intro-text">
                    <p>
                        <span className="intro-title">Oi, eu sou a Nayla.</span> <br />
                       desenvolver telas é minha paixão.<br /><br />
                        Estou no último semestre de Sistemas para Internet na FIAP. No primeiro ano do curso, minha equipe e eu ganhamos o prêmio Next da FIAP, um dos concursos mais concorridos, com empresas renomadas participando.
                    </p><br />
                    <a href="mailto:naylasouzariibeiro@gmail.com" target="_blank" className="ver-mais-link">Entrar em contato</a>
                </div>
            </Fade>
        </section>
    );
};

export default Introduction;
