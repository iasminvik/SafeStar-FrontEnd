import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import banner from '../img/fundojogos.jpg';
import bemvindo from '../img/bemvindo.png';
import cuphead from '../img/cuphead.png';
import hollowKnight from '../img/knight.png';
import hades from '../img/hades4.png';
import celeste from '../img/celeste4.png';
import journey from '../img/journey.png';
import oxenfree from '../img/oxenfree.png';
import outlast from '../img/outlast.png';
import layers from '../img/layers.png';
import fobia from '../img/fobia.png';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  // Verificar se o token de autenticação existe
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    // Se não houver token, redireciona para a página de login
    if (!token) {
      navigate('/login');  // Redireciona para a página de login
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <header className="header d-flex justify-content-between align-items-center">
        <div className="logo-container d-flex align-items-center">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <nav className="nav-links d-flex align-items-center">
            <a href="#nossos-jogos" className="nav-link">Jogos</a>
            <Link to="/sobreNos" className="nav-link">Sobre nós</Link>
            <Link to="/suporte" className="nav-link">Suporte</Link>
          </nav>
        </div>
        <div className="auth-container d-flex align-items-center">
          <span className="me-2">Já tem uma conta?</span>
          <Link to="/login">
            <button className="btn btn-primary me-2">Entrar</button>
          </Link>
          <Link to="/criar-conta">
            <button className="btn btn-secondary">Criar conta</button>
          </Link>
        </div>
      </header>
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner" />
        <img src={bemvindo} alt="Bem-vindo" className="overlay-image" />
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar jogos..." className="search-input" />
          <button type="button" className="search-button" aria-label="Pesquisar jogos">Pesquisar</button>
        </div>
      </div>
      <div className="games-section" id="nossos-jogos">
        <h2 className="games-title">Nossos Jogos</h2>
        <h3 className="games-subtitle">Ação:</h3>
        <div className="games-content">
          <div className="game">
            <Link to="/hades">
              <img src={hades} alt="Hades" className="game-image" />
              <div className="overlay">Hades</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/cuphead">
              <img src={cuphead} alt="Cuphead" className="game-image" />
              <div className="overlay">Cuphead</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/celeste">
              <img src={celeste} alt="Celeste" className="game-image" />
              <div className="overlay">Celeste</div>
            </Link>
          </div>
        </div>
        <h3 className="games-subtitle">Aventura:</h3>
        <div className="games-content">
          <div className="game">
            <Link to="/dowhollow">
              <img src={hollowKnight} alt="Hollow Knight" className="game-image" />
              <div className="overlay">Hollow Knight</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/journey">
              <img src={journey} alt="Journey" className="game-image" />
              <div className="overlay">Journey</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/oxenfree">
              <img src={oxenfree} alt="Oxenfree" className="game-image" />
              <div className="overlay">Oxenfree</div>
            </Link>
          </div>
        </div>
        <h3 className="games-subtitle">Terror:</h3>
        <div className="games-content">
          <div className="game">
            <Link to="/outlast">
              <img src={outlast} alt="Outlast" className="game-image" />
              <div className="overlay">Outlast</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/layers">
              <img src={layers} alt="Layers of Fear" className="game-image" />
              <div className="overlay">Layers of Fear</div>
            </Link>
          </div>
          <div className="game">
            <Link to="/fobia">
              <img src={fobia} alt="Fobia" className="game-image" />
              <div className="overlay">Fobia</div>
            </Link>
          </div>
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
            <Link to="/">Home</Link>
            <Link to="/sobreNos">Sobre nós</Link>
            <Link to="/suporte">Suporte</Link>
            <a href="#nossos-jogos">Jogos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
