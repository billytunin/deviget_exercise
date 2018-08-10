import React, { Component } from 'react'

import moment from 'moment'

import logo from './../../assets/logo.svg'
import utils from '../../utils.js'

class EntryComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      read: this.props.already_seen || false
    }
  }

  componentClicked = () => {
    this.props.onClick()
    this.setState({ read: true })
    this.props.addSeenPost(this.props.id)
  }

  formatDate = (date) => moment.unix(date).fromNow()

  render() {
    let is_default_thumbnail = typeof this.props.thumbnail === 'string' &&
                               ( this.props.thumbnail.startsWith('http://') || this.props.thumbnail.startsWith('https://') )
                               ? false : true
    return (
      <div className="EntryComponent" onClick={this.componentClicked}>
        <div className="header">
          <span>Posted by {this.props.author}</span>
          <span>{this.formatDate(this.props.date)}</span>
          <div className={`unread_dot ${this.state.read ? 'hide' : 'show'}`}></div>
        </div>
        <h3>{this.props.title}</h3>
        <img
          src={is_default_thumbnail ? logo : this.props.thumbnail}
          className="thumbnail" alt="thumbnail"
        />
        <span className="comments_counter">Number of comments: {utils.numFormatter(this.props.comments_counter)}</span>
      </div>
    );
  }
}

export default EntryComponent;
