import React, { Component } from 'react'

import moment from 'moment'

import logo from './../../assets/logo.svg'
import utils from '../../utils.js'

class DetailsViewComponent extends Component {

  formatDate = (date) => moment.unix(date).format('MMMM Do YYYY, h:mm:ss A')

  render() {
    let is_default_thumbnail = this.props.selected_entry &&
                               typeof this.props.selected_entry.thumbnail === 'string' &&
                               ( this.props.selected_entry.thumbnail.startsWith('http://') || this.props.selected_entry.thumbnail.startsWith('https://') )
                               ? false : true
    return (
      <div className="DetailsViewComponent">

        <div className={`no_entry_selected ${this.props.selected_entry ? 'hide' : 'show'}`}>
          <h3>Click any entry to view its details</h3>
        </div>

        {this.props.selected_entry &&
        <div className="details_container">
          <a className="thumbnail_container" href={this.props.selected_entry.url} target="_blank">
            <img
              className={is_default_thumbnail ? 'is_default_thumbnail' : ''}
              src={is_default_thumbnail ? logo : this.props.selected_entry.thumbnail}
              alt="thumbnail"
            />
          </a>
          <div className="data_display">
            <span className="caption">Title</span>
            <span className="data">{this.props.selected_entry.title}</span>
            <span className="caption">Author</span>
            <span className="data">{this.props.selected_entry.author}</span>
            <span className="caption">Published date</span>
            <span className="data">{this.formatDate(this.props.selected_entry.created_utc)}</span>
            <span className="caption">Number of likes</span>
            <span className="data">{utils.numFormatter(this.props.selected_entry.ups)}</span>
            <span className="caption">Number of comments</span>
            <span className="data">{utils.numFormatter(this.props.selected_entry.num_comments)}</span>
          </div>
        </div>
        }

      </div>
    );
  }
}

export default DetailsViewComponent;
