import React from 'react';
import { connect } from 'react-redux';
import './PalettesContainer.css';
import PaletteCard from '../PaletteCard/PaletteCard';

export const PalettesContainer = ({ currentProject, palettes }) => {
  const filteredPalettes = palettes
    .filter(palette => palette.project_id === currentProject.id)
    .map(palette => {
      return (
        <PaletteCard
          id={palette.id}
          project_id={palette.project_id}
          palette_name={palette.palette_name}
          color_1={palette.color_1}
          color_2={palette.color_2}
          color_3={palette.color_3}
          color_4={palette.color_4}
          color_5={palette.color_5}
        />
      );
    });

  return <section className='palette-container'>{filteredPalettes}</section>;
};

export const mapStateToProps = ({ currentProject, palettes }) => ({
  currentProject,
  palettes
});

export default connect(mapStateToProps)(PalettesContainer);
