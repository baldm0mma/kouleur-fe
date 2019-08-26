import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentPalette } from '../../actions'
import './Swatch.css'
import {Button, Icon} from 'semantic-ui-react'


class Swatch extends Component {
  constructor() {
    super() 
    this.state = {
      toggleLockDisplay: false
    }
  }

  toggleLockDisplay = () => {
    this.setState({toggleLockDisplay: !this.state.toggleLockDisplay})
  }

  chooseFontColor = (hex) => {
  var color = (hex.charAt(0) === '#') ? hex.substring(1, 7) : hex;
  var r = parseInt(hex.substring(0, 2), 16); // hexToR
  var g = parseInt(hex.substring(2, 4), 16); // hexToG
  var b = parseInt(hex.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    '#000000' : '#ffffff';
}

  render() {
    const { hex, isLocked } = this.props
    return(
    <article className='swatch' onMouseEnter={this.toggleLockDisplay} onMouseLeave={this.toggleLockDisplay}>
      <section  className='color-swatch' style={{backgroundColor: `#${hex}`}}>
          {(this.state.toggleLockDisplay && isLocked) &&
          <Icon name='lock' style={{color: `${this.chooseFontColor(hex)}`}} id='lock' size='huge'/>}
          {(this.state.toggleLockDisplay && !isLocked) &&
          <Icon name='unlock' style={{color: `${this.chooseFontColor(hex)}`}} id='lock' size='huge'/>}
        <p style={{color: `${this.chooseFontColor(hex)}`}} id='hex'>#{hex.toUpperCase()}</p>
      </section>
    </article>
    )
  }
}


export const mapDispatchToProps = dispatch => ({
  setCurrentPalette: (currentPalette) => dispatch(setCurrentPalette(currentPalette))
});

export default connect(
  null,
  mapDispatchToProps
)(Swatch);