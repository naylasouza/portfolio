import React, { useEffect } from 'react';
import './index.css';

const experiences = [
    {
        "title": "Desenvolvedor de front-end jr",
        "company": "{Reprograma}",
        "description": "Integrante do time de tecnologia responsável pela criação e manutenção de uma plataforma integrada de empregabilidade, seleção e gestão administrativa. Minha principal entrega foi o desenvolvimento de um módulo completo da plataforma, incluindo uma pesquisa de empregabilidade para alunas e empresas parceiras, gerando grande impacto para a Reprograma. A plataforma agilizou e tornou mais seguras as operações internas. Utilizei TypeScript, HTML, SASS e React.",
        "date": "06/21 - 07/2024",
        "position": "left"
    },
    {
        "title": "Analista de sistema",
        "company": "Accurate Software",
        "description": "Trabalhei na Accurate Software, uma consultoria de TI, onde atuei na equipe de manutenção dos sites da Claro e na implementação de cookies conforme a Lei Geral de Proteção de Dados (LGPD) para nossos clientes.",
        "date": "09/2020 - 06/2021",
        "position": "right"
    },
    {
        "title": "Desenvolvedor de front-end - Voluntário",
        "company": "Tech4",
        "description": "Desenvolvemos projetos que utilizam a tecnologia para combater os impactos gerados pelo coronavírus no Brasil.",
        "date": "05/2020 - 06/2020",
        "position": "left"
    }
];

const Timeline = () => {
    useEffect(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const handleScroll = () => {
            timelineItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    item.style.transitionDelay = `${index * 0.5}s`;
                    item.classList.add('in-view');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="experience-container">
            <div className="container">
                <h1 className="line-title experience-title" id="Curriculum">Minhas Experiências</h1>
                <div className="timeline">
                    <ul>
                        {experiences.map((experience, index) => (
                            <li key={index} className={`timeline-item ${experience.position}`}>
                                <div className="content">
                                    <h3>{experience.title}</h3>
                                    <h4>{experience.company}</h4>
                                    <p>{experience.description}</p>
                                </div>
                                <div className={`time ${index === 0 ? 'first' : ''}`}>
                                    {experience.date}
                                </div>
                            </li>
                        ))}
                        <div style={{ clear: 'both' }}></div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
