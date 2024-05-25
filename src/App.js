import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Profile, Signup, Login} from  '/components';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
  );
}

export default App;
