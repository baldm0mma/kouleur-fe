import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPalette, toggleLock } from '../../actions';
import './Swatch.css';
import { Icon } from 'semantic-ui-react';

const  Swatch = ({ hex, isLocked, toggleLock, num }) => {

  const chooseFontColor = hex => {
    var r = parseInt(hex.substring(0, 2), 16); 
    var g = parseInt(hex.substring(2, 4), 16); 
    var b = parseInt(hex.substring(4, 6), 16); 
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  };

  return (
    <article className='swatch'>
      <section
        className='color-swatch'
        style={{ backgroundColor: `#${hex}` }}
        onClick={() => toggleLock(num)}
      >
        {isLocked && (
          <Icon
            name='lock'
            style={{ color: `${chooseFontColor(hex)}` }}
            id='lock'
            size='big'
          />
        )}
        {!isLocked && (
          <Icon
            name='lock open'
            style={{ color: `${chooseFontColor(hex)}` }}
            id='lock'
            size='big'
          />
        )}
        <p style={{ color: `${chooseFontColor(hex)}` }} id='hex'>
          #{hex.toUpperCase()}
        </p>
      </section>
    </article>
  );
}


export const mapDispatchToProps = dispatch => ({
  setCurrentPalette: currentPalette => dispatch(setCurrentPalette(currentPalette)),
  toggleLock: num => dispatch(toggleLock(num))
});

export default connect(
  null,
  mapDispatchToProps
)(Swatch);
