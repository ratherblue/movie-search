import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <span className="rating-stars">
        {this.props.rating}
      </span>
    );
  }
});
