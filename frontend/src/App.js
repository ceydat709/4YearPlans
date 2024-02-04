import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Plan from './components/Plan';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Login from './Login';
import Signups from './Signup';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signups />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
