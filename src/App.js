import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header.js';
import Story from './components/Story.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Story item={this.props.item}/>
      </div>
    );
  }
}

export default App;
