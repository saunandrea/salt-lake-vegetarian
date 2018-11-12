import React, { Component } from 'react';
import MainMap from './MainMap'
import SidePane from './SidePane'
import './App.css';

class App extends Component {

  render() {
    return (
      <div class="mainFrame">
        <SidePane></SidePane>
        <MainMap></MainMap>
      </div>
    );
  }
}

export default App;
