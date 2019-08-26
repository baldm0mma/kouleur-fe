import React from 'react'
import './PaletteCard.css'

export const PaletteCard = ({id, project_id, palette_name, color_1, color_2, color_3, color_4, color_5}) => {

  return (
    <article className='small-palette-container'>
      <h4>{palette_name}</h4>
      <section className='small-palette-display'>
        <div style={{backgroundColor: `#${color_1}`}}></div>
        <div style={{backgroundColor: `#${color_2}`}}></div>
        <div style={{backgroundColor: `#${color_3}`}}></div>
        <div style={{backgroundColor: `#${color_4}`}}></div>
        <div style={{backgroundColor: `#${color_5}`}}></div>
      </section>
    </article>
  )
}

