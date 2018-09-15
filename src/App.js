import React, { Component } from 'react';
import Navbar from '../src/component/Navbar.js';
import Topic from '../src/component/TopicSection.js';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Topic />
      </div>
    );
  }
}

export default App;
