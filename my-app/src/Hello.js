import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <div className="Hello-header">
          <img src={logo} className="Hello-logo" alt="logo" />
          <h2>Welcome to REACT</h2>
        </div>
      </div>
    );
  }
}

export default Hello;
