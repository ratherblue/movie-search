import React from 'react';

import MovieTile from './movie-tile';


export default React.createClass({
  render: function() {
    var results = this.props.results.map(function(result) {
      return <MovieTile movie={result} />;
    });
    return (
      <ul className="search-results">
        {results}
      </ul>
    );
  }
});
