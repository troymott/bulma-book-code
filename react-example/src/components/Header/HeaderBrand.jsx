import React, { Component } from 'react';
import Logo from './../../assets/logo.png';

class HeaderBrand extends Component {
  render() {
    return (
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={Logo} />
        </a>
        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default HeaderBrand;
