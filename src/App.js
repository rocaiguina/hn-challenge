import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Story from './components/Story.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <div>
            <span><i className="fa fa-angle-left"></i></span>
          </div>
          <div className="header__icons--right">
            <span><i className="fa fa-share-square-o"></i></span>
            <span> <i className="fa fa-newspaper-o"></i> </span>
            <span><i className="fa fa-ellipsis-v"></i></span>
          </div>
        </header>
        <Story />
      </div>
    );
  }
}


export default App
