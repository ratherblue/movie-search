import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';
import SearchResults from './search-results';


require('../scss/styles.scss'); // note: you could make component-specific
                                // SCSS here, but just focusing on the
                                // JavaScript due to time

const API_URL = 'http://api.themoviedb.org/3/search/movie'; // constants for these values since they don't change
const API_KEY = '42b3e60b6636f50062f6d3579100d83f';

var MovieSearch = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: '',
      movies: [],
      totalResults: 0,
      page: 1,
      totalPages: 0
    };
  },
  handleSearchInput: function(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });

    // reset state if query is empty
    if (searchTerm === '') {
      this.setState(this.getInitialState());
    }
  },
  fetchData: function(page = 1) {
    var url = API_URL + '?api_key=' + API_KEY + '&query=' + this.state.searchTerm + '&page=' + page;

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(response) {
      if (response.total_results > 0) {
        this.setState({
          totalResults: response.total_results,
          movies: response.results,
          page: response.page,
          totalPages: response.total_pages
        });
      }
    }.bind(this));
  },
  previousPage: function() {
    this.fetchData(this.state.page - 1);
  },
  nextPage: function() {
    this.fetchData(this.state.page + 1);
  },
  handleSearchSubmit: function(e) {
    e.preventDefault(); // prevent form submission

    // only search if there is a search term
    if (this.state.searchTerm !== '') {
      this.fetchData();
    }
  },
  renderSearchResults: function() {
    // don't show search results if there are no results
    if (this.state.totalResults === 0) {
      return;
    } else {
      return <SearchResults data={this.state} previousPage={this.previousPage} nextPage={this.nextPage} />;
    }
  },
  render: function() {
    return (
      <div>
        <h1>Movie Search</h1>
        <SearchForm searchTerm={this.state.searchTerm}
            onSearchInput={this.handleSearchInput} onSearchSubmit={this.handleSearchSubmit} />
        {this.renderSearchResults()}
      </div>
    );
  }
});


ReactDOM.render(
    <MovieSearch />,
    document.getElementById('content')
);
