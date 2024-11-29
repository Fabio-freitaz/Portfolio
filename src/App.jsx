// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/contato';
import NotFound from './pages/NotFound';
import './assets/styles/home.css';
import './assets/styles/contato.css';
import './assets/styles/app.css';
import './assets/styles/Portfolio.css';

function App() {
  return (
    <Router>
      

      <main>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} /> {/* Página de erro */}
        </Routes>
      </main>
      <header>
        
          <div>
            {/* Links de navegação, sem menu */}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Portfolio">Portfólio</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        
      </header>
    </Router>
  );
}

export default App;
