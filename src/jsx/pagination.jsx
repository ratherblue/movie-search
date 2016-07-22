import React from 'react';

export default React.createClass({
  nextButton: function() {
    // disable button if we're at the end of the pages
    if (this.props.page >= this.props.totalPages) {
      return <button className="default-button" disabled>Next</button>;
    } else {
      return <button className="default-button" onClick={this.props.nextPage}>Next</button>;
    }
  },
  previousButton: function() {
    // disable button if you're already at the beginning
    if (this.props.page <= 1) {
      return <button className="default-button" disabled>Previous</button>;
    } else {
      return <button className="default-button" onClick={this.props.previousPage}>Previous</button>;
    }
  },
  render: function() {
    return (
      <div className="pagination">
        {this.previousButton()} {/* use buttons instead of links for semantic markup */}
        {this.nextButton()}
      </div>
    );
  }
});
