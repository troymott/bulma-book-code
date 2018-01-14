import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Collection from './components/Collection/Collection';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/collection" component={Collection} />
          <Route name="collectionDetail" path="/collection/:id" component={Collection} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
