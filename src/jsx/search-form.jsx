import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <form className="search-form" method="get" action="http://api.themoviedb.org/3/search/movie">
        {/* Not exactly relevant here because this is literally written in JavaScript,
             but if it wasn't it would be a good idea to make the form still work
             with JavaScript disabled, which is why the action and api_key are defined. */}
        <input type="hidden" name="api_key" value="42b3e60b6636f50062f6d3579100d83f" />
        <fieldset>
          <legend>Movie Search Form</legend>{/* always include legend for accessibility */}
          <label className="search-label" for="query">Query</label>{/* always include label for accessibility */}
          <input id="query" name="query" type="search" placeholder="Search Movies"
              className="search-input" spellcheck="false" autocorrect="off" autocomplete="off" required />
          <button type="submit" className="search-button">
            Search <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </fieldset>
      </form>
    );
  }
});
