import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent.jsx';
import ListComponent from './../ListComponent/ListComponent.jsx';
import DetailsViewComponent from './../DetailsViewComponent/DetailsViewComponent.jsx';

class App extends Component {
  constructor(){
    super()
    this.state = {
      no_entry_selected: true
    }
  }

  toggleNoEntrySelected = () => {
    this.setState({ no_entry_selected: !this.state.no_entry_selected })
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="body_container">
            <ListComponent toggleNoEntrySelected={this.toggleNoEntrySelected}></ListComponent>
            <DetailsViewComponent no_entry_selected={this.state.no_entry_selected}></DetailsViewComponent>
        </div>
      </div>
    );
  }
}

export default App;
