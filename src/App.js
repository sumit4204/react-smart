import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import AddOrg from './components/AddOrg.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HSBC Distributed Credit Rating System</h1>
        </header>
        <br/>
        <AddOrg/>
      </div>
    );
  }
}

export default App;
