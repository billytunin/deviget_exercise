import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent.jsx';
import ListComponent from './../ListComponent/ListComponent.jsx';
import DetailsViewComponent from './../DetailsViewComponent/DetailsViewComponent.jsx';

import _ from 'lodash'

class App extends Component {
  constructor(){
    super()
    this.state = {
      selected_entry: null,
      current_entries_list: [],
      loading_entries: true,
      seen_posts: JSON.parse( sessionStorage.getItem('seen_posts') ) || []
    }
  }

  updateSelectedEntry = (selected_entry) => {
    this.setState({ selected_entry: selected_entry })
  }

  toggleLoadingEntries = (new_state) => {
    this.setState({ loading_entries: new_state })
  }

  updateEntriesList = (new_entries) => {
    this.setState({ current_entries_list: new_entries })
  }

  removeEntryFromList = (id) => {
    let new_entries_list = this.state.current_entries_list
    _.remove(new_entries_list, (element) => element.data.name === id)
    this.setState({ current_entries_list: new_entries_list })
  }

  cleanEntriesList = () => {
    this.setState({ current_entries_list: [] })
  }

  addSeenPost = (new_id) => {
    let new_seen_posts = this.state.seen_posts
    new_seen_posts.push(new_id)
    sessionStorage.setItem('seen_posts', JSON.stringify(new_seen_posts))
    this.setState({ seen_posts: new_seen_posts })
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent
          toggleLoadingEntries={this.toggleLoadingEntries}
          updateEntriesList={this.updateEntriesList}
          cleanEntriesList={this.cleanEntriesList}
        >
        </HeaderComponent>
        <div className="body_container">
            <ListComponent
              current_entries_list={this.state.current_entries_list}
              loading_entries={this.state.loading_entries}
              updateSelectedEntry={this.updateSelectedEntry}
              seen_posts={this.state.seen_posts}
              addSeenPost={this.addSeenPost}
              removeEntryFromList={this.removeEntryFromList}
            >
            </ListComponent>
            <DetailsViewComponent selected_entry={this.state.selected_entry}></DetailsViewComponent>
        </div>
      </div>
    );
  }
}

export default App;
