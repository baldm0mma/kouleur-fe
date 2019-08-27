import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, PaletteCard } from './PaletteCard.js';

describe('Palettecard', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(
      <PaletteCard
        id={2}
        project_id={2}
        palette_name={'fun pal'}
        color_1={'ffffff'}
        color_2={'ffffff'}
        color_3={'ffffff'}
        color_4={'ffffff'}
        color_5={'ffffff'}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
