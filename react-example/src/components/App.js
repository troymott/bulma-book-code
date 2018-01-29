import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Import Components for Routes
import Login from './Login/Login';
import Collection from './Collection/Collection';
import CollectionSingleBookDetail from './Collection/CollectionSingleBookDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/collection" component={Collection} />
          <Route name="collectionDetail" path="/collection/:id" component={CollectionSingleBookDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
