import React, { Component } from 'react';

import AppContainer from './containers/AppContainer.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <AppContainer className="app-container" />
      </div>
    );
  }
}

export default App;
