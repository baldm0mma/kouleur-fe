import React from 'react';
import { deletePalette, getProjects } from '../../utilities/apiCalls';
import { Icon } from 'semantic-ui-react';
import { deletePaletteUrl, getAllPalettesUrl } from '../../utilities/urls';
import { setPalettes, setError } from '../../actions/index';
import { connect } from 'react-redux';
import './PaletteCard.css';

export const PaletteCard = ({
  id,
  project_id,
  palette_name,
  color_1,
  color_2,
  color_3,
  color_4,
  color_5,
  setError,
  setPalettes
}) => {
  const deleteCurrentPalette = async (deletePaletteUrl, id) => {
    try {
      await deletePalette(deletePaletteUrl, id);
      const palettes = await getProjects(getAllPalettesUrl);
      await setPalettes(palettes);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <article key={id} className='small-palette-container'>
      <div className='palette-control-container'>
        <h4>{palette_name}</h4>
        <Icon
          name='delete'
          id='delete-palette'
          color='red'
          onClick={() => deleteCurrentPalette(deletePaletteUrl, id)}
        />
      </div>
      <section className='small-palette-display'>
        <div style={{ backgroundColor: `#${color_1}` }}></div>
        <div style={{ backgroundColor: `#${color_2}` }}></div>
        <div style={{ backgroundColor: `#${color_3}` }}></div>
        <div style={{ backgroundColor: `#${color_4}` }}></div>
        <div style={{ backgroundColor: `#${color_5}` }}></div>
      </section>
    </article>
  );
};

export const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  setPalettes: palettes => dispatch(setPalettes(palettes))
});

export default connect(
  null,
  mapDispatchToProps
)(PaletteCard);
