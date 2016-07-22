import React from 'react';

import MovieTile from './movie-tile';
import Pagination from './pagination';

export default React.createClass({
  renderHeading: function() {
    return (<h2>Page {this.props.data.page} of {this.props.data.totalPages}</h2>);
  },
  render: function() {
    var results = this.props.data.movies.map(function(movie) {
      return <MovieTile key={movie.id} movie={movie} />;
    });

    return (
      <div>
        <div className="results-header">
          {this.renderHeading()}
          <Pagination page={this.props.data.page} totalPages={this.props.data.totalPages}
             previousPage={this.props.previousPage} nextPage={this.props.nextPage} />
        </div>
        <ul className="search-results">
          {results}
        </ul>
      </div>
    );
  }
});
