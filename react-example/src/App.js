import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import logo from './assets/logo.svg';
import 'bulma';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
