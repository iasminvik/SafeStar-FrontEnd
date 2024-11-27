import React, { useState } from 'react';
import logo from '../img/logo.png';
import '../styles/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importar o hook useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Usar o hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');
  
    console.log('Enviando login com dados: ', formData);  // Adicione um log aqui para ver os dados que estão sendo enviados
  
    try {
      const response = await axios.post('http://localhost:3000/users/login', formData);
  
      console.log('Resposta do backend: ', response.data);  // Verifique a resposta do backend
  
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      navigate('/home');
      setFormData({ email: '', password: '' });
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Credenciais inválidas. Tente novamente.');
    }
  };
  

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" style={{ width: '300px' }} />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sessão</h2>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email ou número de celular:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
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

        <button type="submit" className="btn btn-primary btn-block">Entrar</button>
        <p className="create-account-link">
          Não tem uma conta? <a href="/criar-conta">Criar Conta</a>
        </p>
      </form>
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

export default Login;
