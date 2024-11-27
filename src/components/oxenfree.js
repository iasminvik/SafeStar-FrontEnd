import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/oxenfree.css';

import screenshot1 from '../img/oxenfree2.png';
import screenshot2 from '../img/oxenfree3.png';
import screenshot3 from '../img/oxenfree4.png';
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
      <p>Oxenfree é um thriller sobrenatural sobre um grupo de amigos que involuntariamente abrem uma fenda fantasmagórica. Você é Alex, e você acabou de levar seu novo meio-irmão Jonas para uma festa noturna na ilha que deu terrivelmente errado.
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
      <h1>Oxenfree</h1>
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
        <li>Sistema Operacional:  Windows 8.1 64 bits</li>
        <li>Processador:Intel i5 2,5 GHz</li>
        <li>Memória:  4 GB de RAM</li>
        <li>Gráficos: NVIDIA GeForce GTX 460 / Radeon HD 6750 </li>
        <li>Armazenamento: 3 GB de espaço disponível</li>
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
function Oxenfree() {
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

export default Oxenfree;