import React, { Component } from 'react';

class HeaderUserControls extends Component {
  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            Dave Berning
          </div>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              <div>
                <span className="icon is-small">
                  <i className="fa fa-user-circle-o"></i>
                </span>
                Profile
              </div>
            </a>
            <a className="navbar-item">
              <div>
                <span className="icon is-small">
                  <i className="fa fa-bug"></i>
                </span>
                Report bug
              </div>
            </a>
            <a className="navbar-item">
              <div>
                <span className="icon is-small">
                  <i className="fa fa-sign-out"></i>
                </span>
                Sign Out
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderUserControls;
