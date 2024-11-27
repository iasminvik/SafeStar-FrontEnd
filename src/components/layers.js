import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layers.css';

import screenshot1 from '../img/layers2.png';
import screenshot2 from '../img/layers3.png';
import screenshot3 from '../img/layers5.png';
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
      <p>Encare uma loucura arrepiante que se estende por gerações. Sobreviva aos terrores inexplicáveis na pele de artistas obcecados por suas obras entre a sanidade e a loucura.
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
      <h1>Layers Of Fear</h1>
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
        <li>Sistema Operacional: Win 10 with support for DirectX 12 Agility SDK</li>
        <li>Processador: Intel Core i7 8700K/ AMD Ryzen 5 3600</li>
        <li>Memória: 12 GB de RAM</li>
        <li>Gráficos: Nvidia GTX 1070 8GB</li>
        <li>Armazenamento: 20 GB de espaço disponível</li>
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
          <Link to="/">Home</Link> {/* Link para a página Home */}
          <Link to="/sobreNos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link>
          <a href="#nossos-jogos">Jogos</a> {/* Link para a seção "Nossos Jogos" */}
        </div>
      </div>
    </footer>
  );
}

// Definindo o componente Fobia
function Layers() {
  return (
    <div>
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

export default Layers;