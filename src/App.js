import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, redirect } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from './components/Users';
import Navigation from './components/Navigation';
import { Navigate } from 'react-router-dom';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const[email, setEmail] = useState();

  const handleNavbar = (email) =>{
    setEmail(email);
    setLoggedIn(true);
  }

  return (
    <Router>
    {!isLoggedIn && <Navigation />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" 
      element={<Login onLogin={handleNavbar} />} 
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>
  );
}

export default App;
