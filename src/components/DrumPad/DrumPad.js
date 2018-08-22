import React, { Component } from 'react';
import { DATA } from '../../data';
import DrumButton from '../DrumButton/DrumButton';
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state={
      displayID: ''
    }
    
  }

  changeDisplay = (name) => {
    this.setState({ displayID: name });
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="audio-display">{this.state.displayID}</div>
      <div className='drum-pad'>
        {DATA.map((item) => {
          return (
            <DrumButton
              key={item.keyCode}
              keyCode={item.keyCode}
              audioID={item.audioID}
              keyLetter={item.keyLetter}
              src={item.src}
              changeDisplay={this.changeDisplay}
            />)
        })}
      </div>
    </div>   
    );
  }
}

export default DrumPad;