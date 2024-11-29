// eslint-disable-next-line no-unused-vars
import React from 'react';
import minhaFoto from '../assets/fabiofreitas.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      <img src={minhaFoto} alt="Fábio Freitas" className="avatar" /> {/* Exibe a foto */}
      
      <h1>Olá, eu sou Fábio Freitas</h1>
      <p>
        Sou desenvolvedor front-end especializado em React. Adoro criar interfaces dinâmicas e intuitivas 
        que proporcionem a melhor experiência para os usuários.
      </p>
      
      <div className="btn-container">
        <a href="/Portfolio">Veja meus projetos</a>
        <a href="/contato">Entre em contato</a>
      </div>
    </div>
  );
};

export default Home;
