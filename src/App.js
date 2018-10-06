import React, { Component } from 'react';
import Navbar from './component/Index/Navbar.js';
import Topic from './component/Index/TopicSection.js';
import AboutSection from './component/Index/AboutSection.js';
import Footer from './component/Index/Footer.js';
import ContentTeam from './component/Index/ContentTeam';

import styled from 'styled-components'

const Index = styled.div`
  color: #69302c;
  background-color: #f8bc00;
`
const Home = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`
class App extends Component {
  render() {
    return (
      <Index>
        <Navbar />
        <Home id='home'>
          <Topic />
          <AboutSection />
        </Home>
        <ContentTeam />
        <Footer />
      </Index>
    );
  }
}

export default App;
