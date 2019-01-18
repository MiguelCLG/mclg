import React, { Component } from 'react';
import './App.css';
import './style-tablet.css';
import './style-mobile.css';

import Header from './modules/header';
import Home from './modules/home-page';

class App extends Component {

  render() {
    return (
      <div id="App" className="App bg-low-blue">
        <div className="main-body">
          <Header />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
