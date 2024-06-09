import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

const API_URL = 'http://localhost:5000/api/user';

function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });

      if(response.data == "Success"){
        setLoggedIn(true);
        onLogin(email);
        console.log(isLoggedin);
      }
      else{
        navigate('/login');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  if(isLoggedin){
    console.log("after loggedin");
    console.log(email);
    return <Profile email={email} />
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

