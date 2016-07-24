import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import MovieTile from './movie-tile';
import Pagination from './pagination';

export default React.createClass({
  renderHeading: function() {
    return (<h2>Page {this.props.data.page} of {this.props.data.totalPages}</h2>);
  },
  render: function() {
    var results = this.props.data.movies.map(function(movie, i) {
      return <MovieTile key={movie.id} movie={movie} index={i} />;
    });

    return (
      <div>
        <div className="results-header">
          {this.renderHeading()}
          <Pagination page={this.props.data.page} totalPages={this.props.data.totalPages}
             previousPage={this.props.previousPage} nextPage={this.props.nextPage} />
        </div>
        <ReactCSSTransitionGroup component="ul" className="search-results" transitionAppear={true}
            transitionName="movie-tile" transitionAppearTimeout={500}
            transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {results}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
