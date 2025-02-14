import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Amplify } from 'aws-amplify';  // Correct import
import awsconfig from './aws-exports';  // Your AWS configuration file

// Configure AWS Amplify with the settings from aws-exports.js
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
