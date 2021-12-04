import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Indexstyle from './styles/appstyle.js';

ReactDOM.render(
  <React.StrictMode>
    <App /><Indexstyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
