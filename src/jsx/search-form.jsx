import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <form className="search-form">
        <fieldset>
          <legend>Movie Database Search Form</legend> // always include legend
                                                      // for accessibility
            <label>
              <input type="search" name="search" placeholder="Search Movies"
                className="search-input" spellcheck="false" autocorrect="off" autocomplete="off" />
            </label>
            <button type="submit" class="search-button">Search</button>
        </fieldset>
      </form>
    );
  }
});
