import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Biography from './components/Biography';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import TroubleShooter from './components/TroubleShooter';
import BharatRatna from './components/BharatRatna';

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Biography">Biography</Link>
        <Link to="/Leadership">Leadership</Link>
        <Link to="/Achievements">Achievements</Link>
        <Link to="/TroubleShooter">TroubleShooter</Link>
        <Link to="/BharatRatna">BharatRatna</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Biography' element={<Biography />}/>
        <Route path='/Leadership' element={<Leadership />}/>
        <Route path='/Achievements' element={<Achievements />}/>
        <Route path='/TroubleShooter' element={<TroubleShooter />}/>
        <Route path='/BharatRatna' element={<BharatRatna />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
