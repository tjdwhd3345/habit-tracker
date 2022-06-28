import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

// console.log('index.js');

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
