import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/styles.scss'); // note: you could make component-specific
                                // SCSS here, but just focusing on the
                                // JavaScript due to time

ReactDOM.render(
    <div>
      Content
    </div>,
    document.getElementById('content')
);
