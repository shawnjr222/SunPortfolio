import React from 'react';
import './App.css';
import Water from './Water.js';
import Sun from './Sun.js';
import './Sky.css';


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  

render() {
    return (
      <body class="sky">
        <Sun></Sun>
        <Water></Water>
      </body>
    );
  }
}

