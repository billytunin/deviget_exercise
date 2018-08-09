import React, { Component } from 'react';

class DetailsViewComponent extends Component {
  render() {
    return (
      <div className="DetailsViewComponent">
        <div className={`no_entry_selected ${this.props.no_entry_selected ? 'show' : 'hide'}`}>
          <h3>Click any entry to view its details</h3>
        </div>
      </div>
    );
  }
}

export default DetailsViewComponent;
