import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import EntryComponent from './../EntryComponent/EntryComponent.jsx';

import spinner from './../../assets/spinner.svg'

class ListComponent extends Component {
  renderEntries = () => {
    return this.props.current_entries_list.map(element => 
      <EntryComponent
        key={element.data.name}
        id={element.data.name}
        title={element.data.title}
        author={element.data.author}
        date={element.data.created_utc}
        thumbnail={element.data.thumbnail}
        comments_counter={element.data.num_comments}
        already_seen={this.props.seen_posts && this.props.seen_posts.indexOf(element.data.name) > -1}
        addSeenPost={this.props.addSeenPost}
        onClick={this.props.updateSelectedEntry.bind(this, element.data)}
        removeEntryFromList={this.props.removeEntryFromList}
      >
      </EntryComponent>
    )
  }

  render() {
    return (
      <div className="ListComponent">
        <h2>Reddit entries</h2>

        <div className={`spinner_container ${this.props.loading_entries ? 'show' : 'hide'}`}>
          <img src={spinner} className="spinner" alt="spinner" />
        </div>

        <div className={`no_entries_loaded ${!this.props.loading_entries && this.props.current_entries_list.length === 0 ? 'show' : 'hide'}`}>
          <h4>No entries to show</h4>
        </div>

        {
          !this.props.loading_entries &&
          <ReactCSSTransitionGroup transitionName="entry" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {this.renderEntries()}
          </ReactCSSTransitionGroup>
        }

      </div>
    );
  }
}

export default ListComponent;
