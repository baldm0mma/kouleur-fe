import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import { setCurrentPalette } from '../../actions'
import { connect } from 'react-redux'


import './Picker.css';

export class Picker extends Component {
  

  generateHex = () => {
    const characters = '0123456789abcdef';
    let hex = '';
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  getColors = () => {
    const scheme = new ColorScheme;
    scheme.from_hex(this.generateHex()).scheme('triade')
    let colors = scheme.colors();
    let finalColors = colors.slice(0, 5);
    let updatedPalettes = this.props.currentPalette.map( (curPal, i) => {
      if(curPal.isLocked) {
        return curPal
      }
      this.props.currentPalette[i].hex = finalColors[i]
      return curPal
    
    })
    this.props.setCurrentPalette(updatedPalettes)
  }

  componentDidMount = () => {
    this.getColors()
  }

  render = () => {
    return <div>Hi</div>;
  };
}

export const mapStateToProps = ({ currentPalette }) => ({
  currentPalette
});

export const mapDispatchToProps = dispatch => ({
  setCurrentPalette: (currentPalette) => dispatch(setCurrentPalette(currentPalette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);