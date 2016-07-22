import React from 'react';
import dateFormat from 'dateformat';

import RatingStars from './rating-stars';

export default React.createClass({
  render: function() {
    var poster = this.props.movie.poster_path;
    var title = this.props.movie.title;
    var releaseDate = this.props.movie.release_date;
    var voteAverage = this.props.movie.vote_average;

    var divStyle = {
      backgroundImage: 'url("http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB270902307_.png")'
    };

    if (poster !== null) {
      divStyle.backgroundImage = 'url(http://image.tmdb.org/t/p/w154' + poster + ')';
    }

    if (releaseDate !== '') {
      releaseDate = dateFormat(releaseDate, 'GMT:ddd, mmm dS, yyyy');
    }

    return (
      <li className="movie-tile" title={title} key={this.props.movie.id}>
        <span className="poster" style={divStyle}></span>
        <span className="title">{title}</span>
        <span className="overlay">
          <span className="release-date">{releaseDate}</span>
          <RatingStars rating={this.props.movie.vote_average} />
        </span>
      </li>
    );
  }
});
