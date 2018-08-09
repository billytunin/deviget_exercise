import React, { Component } from 'react';
import logo from './../../assets/logo.svg';

class HeaderComponent extends Component {
  redirectToHome = () => {
    // If there were multiple routes in this app, we would use react-router-dom to handle routes.
    // Since this app has only one route, for the sake of simplicity, we will just reload the page
    window.location.reload();
  }

  render() {
    return (
      <div className="HeaderComponent">
        <img src={logo} className="logo" alt="logo" onClick={this.redirectToHome} />
      </div>
    );
  }
}

export default HeaderComponent;
