import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent.jsx';
import ListComponent from './../ListComponent/ListComponent.jsx';
import DetailsViewComponent from './../DetailsViewComponent/DetailsViewComponent.jsx';

class App extends Component {
  constructor(){
    super()
    this.state = {
      selected_entry: null
    }
  }

  updateSelectedEntry = (selected_entry) => {
    this.setState({ selected_entry: selected_entry })
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="body_container">
            <ListComponent updateSelectedEntry={this.updateSelectedEntry}></ListComponent>
            <DetailsViewComponent selected_entry={this.state.selected_entry}></DetailsViewComponent>
        </div>
      </div>
    );
  }
}

export default App;
