import React, { Component } from 'react'
import moment from 'moment'
import logo from './../../assets/logo.svg'

class EntryComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      read: false
    }
  }

  formatDate = (date) => moment.unix(date).fromNow()

  render() {
    return (
      <div className="EntryComponent" onClick={this.props.onClick}>
        <div className="header">
          <span>Posted by {this.props.author}</span>
          <span>{this.formatDate(this.props.date)}</span>
          <div className={`unread_dot ${this.read ? 'hide' : 'show'}`}></div>
        </div>
        <h3>{this.props.title}</h3>
        <img
          src={this.props.thumbnail === 'default' || this.props.thumbnail === 'self' ? logo : this.props.thumbnail}
          className="thumbnail" alt="thumbnail"
        />
        <span className="comments_counter">Number of comments: {this.props.comments_counter}</span>
      </div>
    );
  }
}

export default EntryComponent;
