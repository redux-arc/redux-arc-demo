import React, { Component } from 'react';
import Contacts from './components/Contacts/Contacts';
import logo from './logo.svg';
import './Root.css';

class Root extends Component {
  render() {
    return (
      <div className="root">
        <header className="root-header">
          <img src={logo} className="root-logo" alt="logo" />
          <h1 className="root-title">Welcome to Arc</h1>
        </header>
        <Contacts />
      </div>
    );
  }
}

export default Root;
