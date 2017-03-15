import React, { Component } from 'react';
import logo from './logo.svg';
import BoardContainer from './components/boardContainer.jsx';
import { Header } from './components/header.jsx';
import { store } from './redux/store';
import './css/App.css';

class App extends Component {

  render() {
    console.log('Store:',store.getState());
    return (
      <div className="App">
        <Header />
        <BoardContainer />
      </div>
    );
  }
}

export default App;
