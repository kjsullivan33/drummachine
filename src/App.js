import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import DrumPad from './components/DrumPad/DrumPad';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <DrumPad />
      </div>
    );
  }
}

export default App;
