import React from 'react';
import dateFormat from 'dateformat';

import RatingStars from './rating-stars';

const DEFAULT_POSTER_IMG = 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB270902307_.png'; // eslint-disable-line max-len
const POSTER_IMG_PREFIX = 'http://image.tmdb.org/t/p/w154';

// Separate component, but keep in same file to prevent spaghetti code
// and because it's tied to the MovieTile
var TileOverlay = React.createClass({
  render: function() {
    var releaseDate = this.props.releaseDate;
    var voteAverage = this.props.voteAverage;

    if (releaseDate !== '') {
      releaseDate = dateFormat(releaseDate, 'GMT:ddd, mmm dS, yyyy');
    }

    return (
      <span className="overlay">
        <span className="release-date">{releaseDate}</span>
        <RatingStars rating={voteAverage} />
      </span>
    );
  }
});

export default React.createClass({
  render: function() {
    var poster = this.props.movie.poster_path;
    var title = this.props.movie.title;

    // have a default image background in case result is empty
    var divStyle = {
      backgroundImage: 'url(' + DEFAULT_POSTER_IMG + ')'
    };

    if (poster !== null) {
      divStyle.backgroundImage = 'url(' + POSTER_IMG_PREFIX + poster + ')';
    }

    return (
      <li className="movie-tile" title={title}>
        <span className="poster" style={divStyle}></span>
        <span className="title">{title}</span>
        <TileOverlay voteAverage={this.props.movie.vote_average} releaseDate={this.props.movie.release_date} />
      </li>
    );
  }
});