import React from 'react';

export default React.createClass({
  className: function(index) {
    var filledStars = this.props.totalStars;

    if (Math.ceil(filledStars) === index) {
      return 'partial-star';
    } else if (Math.ceil(filledStars) < index) {
      return 'empty-star';
    } else {
      return '';
    }
  },
  starPercentage: function(index) {
    var filledStars = this.props.totalStars;

    var divStyle = {};

    if (Math.ceil(filledStars) === index) {
      var percentage = Math.floor((filledStars - Math.floor(filledStars)) * 100);
      divStyle.backgroundImage = 'linear-gradient(to right, #fc0 ' + percentage + '%, #999 ' + percentage + '%';
    }

    return divStyle;
  },
  blankStars: function() {
    var stars = [];

    for (var x = 0; x < this.props.blankStars; x++) {
      stars.push(<i className={'fa fa-star rating-star ' + this.className(x + 1)} title={this.props.totalStars}
          style={this.starPercentage(x + 1)} aria-hidden="true" key={x}></i>);
    }

    return stars;
  },
  render: function() {
    return (
      <span className="rating-stars">
        {this.blankStars()}
      </span>
    );
  }
});
