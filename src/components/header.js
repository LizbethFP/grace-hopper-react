import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="text-left pl-3 mt-4">Grace Hopper</h1>
        <hr></hr>
      </header>
    );
  }
}

export default Header;