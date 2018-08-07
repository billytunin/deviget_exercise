import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent.jsx';
import ListComponent from './../ListComponent/ListComponent.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="body_container">
            <ListComponent></ListComponent>
        </div>
      </div>
    );
  }
}

export default App;
