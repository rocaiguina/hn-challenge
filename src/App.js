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
        <Story 
          story={this.props.story}
          comments={this.props.comments}
          users={this.props.users}
          />
      </div>
    );
  }
}

export default App;
