import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';


require('../scss/styles.scss'); // note: you could make component-specific
                                // SCSS here, but just focusing on the
                                // JavaScript due to time


ReactDOM.render(
    <div>
      <SearchForm />
    </div>,
    document.getElementById('content')
);
