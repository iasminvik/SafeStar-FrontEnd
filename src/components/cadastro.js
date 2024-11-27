import React, { useState } from 'react';
import logo from '../img/logo.png';
import '../styles/cadastro.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3000/users/register', formData);
      setMessage('Cadastro realizado com sucesso!');
      setFormData({ name: '', email: '', password: '' });

      // Redireciona para a página de login após o sucesso
      setTimeout(() => {
        navigate('/login'); // Redireciona para a página de login
      }, 2000); // Aguarda 2 segundos para o usuário visualizar a mensagem de sucesso
    } catch (err) {
      setError('Erro ao cadastrar o usuário. Tente novamente.');
    }
  };

  return (
    <div className="cadastro-container">
      <img src={logo} alt="Logo" className="logo" style={{ width: '300px' }} />
      
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Criar Conta</h2>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Criar Conta</button>
      </form>

      {/* Texto clicável para redirecionar para a página de login */}
      <div className="redirect-login">
        <p>Já tem uma conta? <a href="/login">Faça login aqui</a></p>
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
        </div>
      </footer>
    </div>
  );
};

export default Cadastro;
