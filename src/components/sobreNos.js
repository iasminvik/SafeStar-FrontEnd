import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/sobreNos.css';
import ftTurma from '../img/ftTurma.png'; // Importe a nova imagem

const SobreNos = () => {
  return (
    <div className="sobreNos-container">
      <header className="header">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/sobreNos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link> {/* Link de Suporte no lugar de Jogos */}
        </nav>
      </header>
      <div className="content">
        <div className="text-container">
          <h1>Um pouco sobre nós:</h1>
          <p>
            Somos uma equipe de cinco estudantes apaixonados por tecnologia, atualmente cursando Informática para Internet no SENAC.
          </p>
          <p>
            Nossa missão é desenvolver um site de jogos, mas também celebrar a criatividade e a inovação dos desenvolvedores independentes. Cada membro da nossa equipe traz uma habilidade especial para o projeto, garantindo que nosso site seja um lugar onde os jogadores possam descobrir e se apaixonar por novos títulos.
          </p>
          <p>
            Na SafeStar, acreditamos que os jogos independentes têm o poder de proporcionar experiências únicas. Nosso objetivo foi criar uma plataforma onde esses jogos possam alcançar um público apaixonado.
          </p>
          <p>
            Obrigado por visitar a SafeStar! Esperamos que você aproveite nossos jogos.
          </p>
          <img src={ftTurma} alt="Foto da turma" className="new-image" /> {/* Adicione a nova imagem aqui */}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>
          <h6>© 2024 SafeStar. Todos os direitos reservados.</h6>
          <div className="footer-contact">
            <p>Email para contato: SafeStar@gmail.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link> {/* Link para a página Home */}
            <Link to="/sobreNos">Sobre nós</Link>
            <Link to="/suporte">Suporte</Link>
            <a href="#nossos-jogos">Jogos</a> {/* Link para a seção "Nossos Jogos" */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SobreNos;
