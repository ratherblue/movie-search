import React from 'react';
import MovieTile from './movie-tile';

export default React.createClass({
  renderHeading: function() {
    if (this.props.results.length > 0) {
      return (<h2>Results {this.props.results.length} of {this.props.totalResults}</h2>);
    } else {
      return;
    }
  },
  render: function() {
    var results = this.props.results.map(function(result) {
      return <MovieTile key={result.id} movie={result} />;
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
