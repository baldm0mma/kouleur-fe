import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import './Picker.css';

export class Picker extends Component {
  constructor() {
    super();
    this.state = {
      swatches: [
        {
          name: 'swatch_1',
          hex: '',
          isLocked: false
        },
        {
          name: 'swatch_2',
          hex: '',
          isLocked: false
        },
        {
          name: 'swatch_3',
          hex: '',
          isLocked: false
        },
        {
          name: 'swatch_4',
          hex: '',
          isLocked: false
        },
        {
          name: 'swatch_5',
          hex: '',
          isLocked: false
        }
      ]
    };
  }

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
  }

  componentDidMount = () => {
    console.log(this.getColors())
  }

  render = () => {
    return <div>Hi</div>;
  };
}
