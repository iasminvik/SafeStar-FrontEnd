import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Home from './components/home';
import SobreNos from './components/sobreNos'; 
import DowHollow from './components/dowhollow';
import Fobia from './components/fobia';
import Cuphead from './components/cuphead';
import Hades from './components/hades';
import Celeste from './components/celeste';
import Journey from './components/journey';
import Oxenfree from './components/oxenfree';
import Outlast from './components/outlast';
import Layers from './components/layers';
import Suporte from './components/suporte'; // Import the Suporte component

const App = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/sobreNos" element={<SobreNos />} />
        <Route path="/dowhollow" element={<DowHollow />} />
        <Route path="/fobia" element={<Fobia />} />
        <Route path="/cuphead" element={<Cuphead />} />
        <Route path="/hades" element={<Hades />} />
        <Route path="/celeste" element={<Celeste />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/oxenfree" element={<Oxenfree />} />
        <Route path="/outlast" element={<Outlast />} />
        <Route path="/layers" element={<Layers />} />
        <Route path="/suporte" element={<Suporte />} /> {/* Add the route for Suporte */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
