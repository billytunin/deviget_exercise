import React, { Component } from 'react';
import logo from './../../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="HeaderComponent">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default App;
