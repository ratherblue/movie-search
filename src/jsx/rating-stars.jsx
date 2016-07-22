import React from 'react';

// Don't have time to implement, but this would be a stand-alone module
// that shows rating stars based on a numerator and a denominator.
// Can use an icon font with `background-clip: text` to do partially-filled stars.

export default React.createClass({
  render: function() {
    return (
      <span className="rating-stars">
        {this.props.rating}
      </span>
    );
  }
});
