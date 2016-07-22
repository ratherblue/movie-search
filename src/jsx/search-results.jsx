import React from 'react';
import MovieTile from './movie-tile';

export default React.createClass({
  renderHeading: function() {
    if (this.props.results.length > 0) {
      return (<h2>Results</h2>);
    } else {
      return;
    }
  },
  render: function() {
    var results = this.props.results.map(function(result) {
      return <MovieTile movie={result} />;
    });

    return (
      <div>
        {this.renderHeading()}
        <ul className="search-results">
          {results}
        </ul>
      </div>
    );
  }
});
