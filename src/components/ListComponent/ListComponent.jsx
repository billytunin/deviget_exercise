import React, { Component } from 'react'
import EntryComponent from './../EntryComponent/EntryComponent.jsx';

import spinner from './../../assets/spinner.svg'

class ListComponent extends Component {
  render() {
    return (
      <div className="ListComponent">
        <h2>Reddit entries</h2>
        <div className={`spinner_container ${this.props.loading_entries ? 'show' : 'hide'}`}>
          <img src={spinner} className="spinner" alt="spinner" />
        </div>
        {
          !this.props.loading_entries &&
          this.props.current_entries_list
          .map(element => 
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
            >
            </EntryComponent>
          )
        }
      </div>
    );
  }
}

export default ListComponent;
