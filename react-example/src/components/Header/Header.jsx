import React, { Component } from 'react';
import HeaderBrand from './HeaderBrand';
import HeaderUserControls from './HeaderUserControls';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar has-shadow">
          <HeaderBrand />

          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <small>Publishing at the speed of technology</small>
              </div>
            </div>
            <HeaderUserControls />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
