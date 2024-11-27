import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cuphead.css'; // Importa o arquivo CSS combinado

import screenshot1 from '../img/cup3.png';
import screenshot2 from '../img/cup2.png';
import screenshot3 from '../img/cup1.png';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

// Componente do botão de download
function DownloadButton() {
  return (
    <div className="text-center mt-4">
      <a href="/path/to/game-download.zip" className="btn btn-success btn-lg" download>Baixar Jogo</a>
    </div>
  );
}

// Componente da descrição do jogo
function GameDescription() {
  return (
    <div className="container mt-4">
      <h2>Sobre o Jogo</h2>
      <p>
        Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz. 
        Jogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!
      </p>
    </div>
  );
}

// Componente do cabeçalho da página "Sobre Nós"
function AboutUsHeader() {
  return (
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
  );
}

// Componente do cabeçalho do jogo
function Header() {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Cuphead</h1>
    </header>
  );
}

// Componente de screenshots
function Screenshots() {
  const screenshots = [
    { src: screenshot1, alt: 'Screenshot 1' },
    { src: screenshot2, alt: 'Screenshot 2' },
    { src: screenshot3, alt: 'Screenshot 3' },
  ];

  return (
    <div className="container mt-4 screenshots">
      <div className="row">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="col-md-4">
            <img src={screenshot.src} alt={screenshot.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente dos requisitos do sistema
function SystemRequirements() {
  return (
    <div className="container mt-4">
      <h2>Requisitos do Sistema</h2>
      <ul>
        <li>Sistema Operacional: WINDOWS® 7</li>
        <li>Processador: Intel Core2 Duo E8400, 3.0GHz ou AMD Athlon 64 X2 6000+</li>
        <li>Memória: 3 GB de RAM</li>
        <li>Gráficos: Geforce 9600 GT ou AMD HD 3870 512MB</li>
        <li>Armazenamento: 4 GB de espaço disponível</li>
      </ul>
    </div>
  );
}

// Componente do rodapé
function Footer() {
  return (
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
          <Link to="/">Home</Link>
          <Link to="/sobreNos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link>
          <a href="#nossos-jogos">Jogos</a>
        </div>
      </div>
    </footer>
  );
}

// Componente principal do Cuphead
function Cuphead() {
  return (
    <div className="cuphead-container">
      <AboutUsHeader /> {/* Cabeçalho da página Sobre Nós */}
      <Header />
      <GameDescription />
      <Screenshots />
      <SystemRequirements />
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default Cuphead;
