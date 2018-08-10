import React, { Component } from 'react'
import _ from 'lodash'

import constants from '../../constants.js'

class PaginationComponent extends Component {
  constructor(){
    super()
    this.state = {
      current_page: { index: 0, number: 1 },
      buttons: [
        { caption: '1', button_number: 1, page_name: 'first', selected: true, hidden: false }
      ],
      current_last_page: 1,
      prev_button_disabled: 'disabled',
      hidden_previous_numbers: false
    }
  }

  componentDidMount() {
    this.updateEntries()
  }

  buttonNumberAlreadyExists(page_name) {
    return _.find(this.state.buttons, (object) => object.page_name === page_name)
  }

  updateEntries = async (page_name) => {
    this.props.toggleLoadingEntries(true)
    let page_param = page_name ? `after=${page_name}` : ''
    let url = constants.top_entries_url + page_param
    try {
      const fetchResult = fetch(url)
      const response = await fetchResult
      const jsonData = await response.json()
      this.props.toggleLoadingEntries(false)
      this.props.updateEntriesList(jsonData.data.children)
      if( !this.buttonNumberAlreadyExists(jsonData.data.after) ) {
        this.updateButtonsArray(jsonData.data.after)
      }
    } catch(e) {
      // Handle error by showing "Whoops! Our app is having trouble while trying to contact Reddit's server"
    }
  }

  updateButtonsArray(after_key) {
    this.setState({ current_last_page: this.state.current_last_page + 1 }, () => {
      let new_buttons_array = this.state.buttons
      new_buttons_array.push({
        caption: this.state.current_last_page.toString(),
        button_number: this.state.current_last_page,
        page_name: after_key,
        selected: false
      })

      new_buttons_array.sort( (a, b) => a.button_number - b.button_number )
      this.setState({ buttons: new_buttons_array })
    })
  }

  getPageNameByButtonNumber(button_number) {
    return _.find(this.state.buttons, (object) => object.button_number === button_number)
  }

  showAdjacentButtons() {
    let new_buttons_array = this.state.buttons
    let hidden_previous_numbers = false
    if(new_buttons_array[this.state.current_page.index + 1]) new_buttons_array[this.state.current_page.index + 1].hidden = false
    if(new_buttons_array[this.state.current_page.index + 2]) new_buttons_array[this.state.current_page.index + 2].hidden = false
    if(new_buttons_array[this.state.current_page.index - 1]) new_buttons_array[this.state.current_page.index - 1].hidden = false
    if(new_buttons_array[this.state.current_page.index - 2]) new_buttons_array[this.state.current_page.index - 2].hidden = false
    if(new_buttons_array[this.state.current_page.index - 3]) hidden_previous_numbers = true

    this.setState({ buttons: new_buttons_array, hidden_previous_numbers: hidden_previous_numbers })
  }

  selectPage = (button_number, page_name, prev_or_next) => {
    if(prev_or_next && typeof prev_or_next === 'string'){
      if(prev_or_next === 'prev'){
        button_number = this.state.current_page.number !== 1 ? this.state.current_page.number - 1 : this.state.current_page.number
        page_name = this.getPageNameByButtonNumber(button_number).page_name
      } else {
        button_number = this.state.current_page.number + 1
        page_name = this.getPageNameByButtonNumber(button_number).page_name
      }
    }

    let new_buttons_array = this.state.buttons
    new_buttons_array.forEach((element, index) => {
      if(element.button_number === button_number){
        new_buttons_array[index].hidden = false
        new_buttons_array[index].selected = true
        this.setState({ current_page: { index: index, number: button_number } }, () => { this.showAdjacentButtons() })
      } else {
        new_buttons_array[index].hidden = true
        new_buttons_array[index].selected = false
      }
    })

    button_number === 1 ? this.setState({ prev_button_disabled: 'disabled' }) : this.setState({ prev_button_disabled: '' })
    
    this.setState({ buttons: new_buttons_array }, () => { this.updateEntries(page_name) })
  }

  render() {
    return (
      <div className="PaginationComponent">
        <ul className="pagination pagination-sm">
          <button
            disabled={this.state.prev_button_disabled}
            className={`page-item ${this.state.prev_button_disabled} page-link prev-button`}
            aria-label="Previous"
            onClick={this.selectPage.bind(this, null, null, 'prev')}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
          <button className={`page-item page-link ${this.state.hidden_previous_numbers ? 'show' : 'hide'}`}>...</button>
          {this.state.buttons.map(element =>
            <button
              onClick={this.selectPage.bind(this, element.button_number, element.page_name)}
              key={element.button_number}
              className={`page-item page-link ${element.selected ? 'selected' : ''} ${element.hidden ? 'hide' : 'show'}`}>
                {element.caption}
            </button>)
          }
          <button className="page-item page-link">...</button>
          <button className="page-item page-link next-button" aria-label="Next" onClick={this.selectPage.bind(this, null, null, 'next')}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </ul>

      </div>
    );
  }
}

export default PaginationComponent;
