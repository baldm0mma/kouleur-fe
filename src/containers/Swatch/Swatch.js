import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPalette } from '../../actions'
import './Swatch.css'

const Swatch = ({hex}) => {
  return(
    <article className='swatch'>
      <section  className='color-swatch' style={{backgroundColor: `#${hex}`}}></section>
      <button>Lock</button>
      <p>{hex}</p>
    </article>
  )
}


export const mapDispatchToProps = dispatch => ({
  setCurrentPalette: (currentPalette) => dispatch(setCurrentPalette(currentPalette))
});

export default connect(
  null,
  mapDispatchToProps
)(Swatch);