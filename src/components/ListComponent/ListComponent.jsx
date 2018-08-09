import React, { Component } from 'react'
import EntryComponent from './../EntryComponent/EntryComponent.jsx';

import spinner from './../../assets/spinner.svg'
import constants from '../../constants.js'

class ListComponent extends Component {
  constructor() {
    super()
    this.state = {
      current_page: '',
      current_entries_list: [],
      loading: true
    }
  }

  componentDidMount() {
    this.updateEntries(this.state.current_page)
  }

  updateEntries = async (page_name) => {
    this.setState({ loading: true })
    let listComponent = this;
    let page_param = page_name ? `after=${page_name}` : ''
    let url = constants.top_entries_url + page_param
    try {
      const fetchResult = fetch(url)
      const response = await fetchResult
      const jsonData = await response.json()
      listComponent.setState({ current_page: page_name, current_entries_list: jsonData.data.children, loading: false })
    } catch(e) {
      // Handle error by showing "Whoops! Our app is having trouble while trying to contact Reddit's server"
    }
  }

  render() {
    return (
      <div className="ListComponent">
        <h2>Reddit entries</h2>
        <div className={`spinner_container ${this.state.loading ? 'show' : 'hide'}`}>
          <img src={spinner} className="spinner" alt="spinner" />
        </div>
        {this.state.current_entries_list
          .map(element => 
            <EntryComponent
              key={element.data.name}
              title={element.data.title}
              author={element.data.author}
              date={element.data.created_utc}
              thumbnail={element.data.thumbnail}
              comments_counter={element.data.num_comments}
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
