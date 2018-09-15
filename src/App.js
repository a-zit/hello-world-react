import React, { Component } from 'react';
import Navbar from './component/Index/Navbar.js';
import Topic from './component/Index/TopicSection.js';
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
