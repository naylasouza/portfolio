import React from 'react';
import './index.css'; 
import batataImage from '../../imagens/batata.png'; 

const SkillsComponent = () => {
  const quotes = [
    {
      text: "Ela é uma desenvolvedora dedicada, sempre em busca de aprimoramento. Fez parte do time que desenvolveu a plataforma {reprograma} tornando mais eficiente e escalável nossos processos seletivos e de empregabilidade. Para além da técnica, Nayla tem um ótimo humor e traz leveza ao time.",
      author: "Carla De Bona - CEO & Co-Founder at {reprograma}"
    },
    {
      text: "Durante o desenvolvimento do projeto Todas em Tech, tive a satisfação de trabalhar com a Nayla ao supervisionar a entrega da plataforma {reprograma}. Antes de se juntar à equipe, Nayla já havia se destacado pelo seu comprometimento e capacidade de aprendizagem como aluna da {reprograma}. Por isso, a transição dela à integrante da equipe de desenvolvimento da plataforma foi marcada por uma evolução natural e muito bem-sucedida. Ao longo de 2 anos, pude presenciar o crescimento e amadurecimento profissional de Nayla. Uma característica marcante de seu trabalho é sua preocupação e capacidade de manter-se comprometida (no front-end) ao design proposto. Outro aspecto que vale ressaltar é sua busca por aprimoramento contínuo: ela iniciou uma graduação em sistemas para internet ao mesmo tempo em que trabalhava, conseguindo manter a qualidade de suas entregas e agregando conhecimento técnico a partir dessa formação.",
      author: "Silvia Rodrigues Follador - Program Director and PhD Candidate",
      isLong: true
    }
  ];

  const truncateText = (text, isLong) => {
    if (isLong) {
      return text.slice(0, 320) + "...";
    }
    return text;
  };

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2>O que dizem</h2>
        <h3>sobre mim</h3>
        <div className="quotes">
          {quotes.map((quote, index) => (
            <div className="quote-item" key={index}>
              <p className="quote-text">"{truncateText(quote.text, quote.isLong)}"<br/> - <span className="quote-author">{quote.author}</span></p>
              {quote.isLong && (
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" className="ver-mais-link" rel="noreferrer">Ver mais</a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-images">
        <img src={batataImage} alt="Imagem" />
      </div>
    </div>
  );
};

export default SkillsComponent;
