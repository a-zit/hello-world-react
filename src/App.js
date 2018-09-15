import React, { Component } from 'react';
import Navbar from './component/Index/Navbar.js';
import Topic from './component/Index/TopicSection.js';
import AboutSection from './component/Index/AboutSection.js';
import Footer from './component/Index/Footer.js';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Topic />
        <AboutSection />
        <Footer />
      </div>
    );
  }
}

export default App;
