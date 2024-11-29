
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      name: 'Biblioteca de livros',
      description: 'Projeto desenvolvido usando React. Uma aplicação web interativa.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.ANmLkdzG3C9pO5IvEl5UfwHaHa&pid=Api&P=0&h=180',
      link: 'https://github.com/Fabio-freitaz/biblioteca-de-livros', 
    },
    {
      name: 'Pesquisa de jogos online',
      description: 'Aplicação simples de To-Do List usando React.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.yYF8SyV15QOZwGJzpce6IQHaFO&pid=Api&P=0&h=180', 
      link: 'https://github.com/Fabio-freitaz/PESQUISA-DE-JOGOS-ONLINE', 
    },
    {
      name: 'Pokedex',
      description: 'Uma página pessoal criada com HTML, CSS e JavaScript.',
      image: 'https://www.kindpng.com/picc/m/541-5418191_original-pokedex-hd-png-download.png',
      link: 'https://github.com/Fabio-freitaz/pokedex',
    },
    
  ];

  return (
    <div className="portfolio">
      <h2>Meus Projetos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;