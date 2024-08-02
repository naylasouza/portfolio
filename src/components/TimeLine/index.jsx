import React, { useEffect, useState } from 'react';
import './index.css';

const Timeline = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('/data/experiences.json')
            .then(response => response.json())
            .then(data => setExperiences(data))
            .catch(console.log("erro"));
    }, []);

    return (
        <section className="timeline">
            <h2 className="timeline-title">Minhas experiências</h2>
            <div className="timeline-container">
                {experiences.map((experience, index) => (
                    <div className={`timeline-item ${experience.position}`} key={index}>
                        <div className="timeline-content">
                            <h3>{experience.title}</h3>
                            <span>{experience.company}</span>
                            <p>{experience.description}</p>
                            <div className="timeline-date">{experience.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
