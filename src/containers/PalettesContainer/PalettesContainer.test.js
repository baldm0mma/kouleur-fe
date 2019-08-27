import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, PalettesContainer } from './PalettesContainer.js';

describe('PalettesContainer', () => {
  let palettes;
  let wrapper;
  let currentProject;

  beforeEach(() => {
    currentProject = { project_name: 'evans_pal', id: 2 };
    palettes = [
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' }
    ];
    wrapper = shallow(
      <PalettesContainer currentProject={currentProject} palettes={palettes} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const mappedProps = mapStateToProps(
      { currentProject: currentProject },
      { palettes: palettes }
    );
    expect(mappedProps).toEqual({ currentProject });
  });
});
