import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import { setCurrentPalette, toggleNewPalette } from '../../actions';
import { connect } from 'react-redux';
import Swatch from '../Swatch/Swatch';
import { Button } from 'semantic-ui-react';

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
    const scheme = new ColorScheme();
    scheme.from_hex(this.generateHex()).scheme('triade');
    let colors = scheme.colors();
    let finalColors = colors.slice(0, 5);
    let updatedPalettes = this.props.currentPalette.map((curPal, i) => {
      if (curPal.isLocked) {
        return curPal;
      }
      this.props.currentPalette[i].hex = finalColors[i];
      return curPal;
    });
    this.props.setCurrentPalette(updatedPalettes);
  };

  createSwatches = () => {
    return this.props.currentPalette.map((color, i) => {
      return <Swatch hex={color.hex} isLocked={color.isLocked} num={i} />;
    });
  };

  componentDidMount = () => {
    this.getColors();
  };

  render = () => {
    return (
      <section>
        <div className='swatch-container'>{this.createSwatches()}</div>
        <Button id='palette-button' onClick={this.getColors}>
          Generate
        </Button>
        <Button
          id='palette-button'
          onClick={() => this.props.toggleNewPalette(true)}
        >
          Save
        </Button>
      </section>
    );
  };
}

export const mapStateToProps = ({ currentPalette }) => ({
  currentPalette
});

export const mapDispatchToProps = dispatch => ({
  setCurrentPalette: currentPalette =>
    dispatch(setCurrentPalette(currentPalette)),
  toggleNewPalette: newPalette => dispatch(toggleNewPalette(newPalette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
