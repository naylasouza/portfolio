import React, { useEffect } from 'react';
import './index.css';
import perfils from '../../imagens/perfils.png';

const Introduction = () => {
    useEffect(() => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        const handleScroll = () => {
            fadeInElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.classList.add('show');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="introduction">
            <div className="intro-image">
                <img src={perfils} alt="Perfil" className="profile-image" />
            </div>
            <div className="intro-text fade-in">
                <p>
                    <span className="intro-title">Oi, eu sou a Nayla.</span> <br />
                    Desenvolver telas é minha paixão.<br /><br />
                    Estou no último semestre de Sistemas para Internet na FIAP. No primeiro ano do curso, minha equipe e eu ganhamos o prêmio Next da FIAP, um dos concursos mais concorridos, com empresas renomadas participando.
                </p><br />
                <a href="mailto:naylasouzariibeiro@gmail.com" className="ver-mais-link">Entrar em contato</a>
            </div>
        </section>
    );
};

export default Introduction;
