import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <span className="rating-stars">
        {this.props.rating}
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
      </span>
    );
  }
});
