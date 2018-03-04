import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Aside from './components/aside';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
        <Aside />
      </div>
    );
  }
}

export default App;
