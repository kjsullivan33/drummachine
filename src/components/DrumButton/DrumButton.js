import React, { Component } from 'react';
import './DrumButton.css';

class DrumButton extends Component {

  handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  playSound = () => {
    const sound = document.getElementById(this.props.keyLetter);
    sound.currentTime = 0;
    sound.play();
    this.props.changeDisplay(this.props.audioID);

  }

  render () {
    return (
      <div
        className='drum-button'
        id={this.props.audioID}
        onClick={this.playSound}
        >
        {this.props.keyLetter}
        <audio
          className='clip'
          id={this.props.keyLetter}
          src={this.props.src}
          type="audio/mpeg" />
      </div>
    );
  } 
  }

  export default DrumButton;