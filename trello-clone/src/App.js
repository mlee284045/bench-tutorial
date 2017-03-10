import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/boardContainer.jsx';
import { store } from './redux/store';
import './css/App.css';

class App extends Component {

  render() {
    console.log('Store:',store.getState());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
