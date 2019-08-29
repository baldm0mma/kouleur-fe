import React from 'react';
import { shallow } from 'enzyme';
import {
  mapStateToProps,
  mapDispatchToProps,
  NewPaletteModal
} from './NewPaletteModal.js';
import {
  toggleNewPalette,
  setError,
  setPalettes
} from '../../actions';

describe('New Project Modal', () => {
  let wrapper;
  let projects;
  let palettes;
  let mockDispatch;
  beforeEach(() => {
    projects = [{ project_name: 'evans fun proj', id: 2 }];
    palettes= [{hex: 'fffffff'}, {hex: 'fffffff'}, {hex: 'fffffff'}, {hex: 'fffffff'}]
    wrapper = shallow(
      <NewPaletteModal projects={projects} errorMessage={''} />
    );
    mockDispatch = jest.fn();
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const mappedProps = mapStateToProps(
      { projects: projects },
      { errorMessage: '' }
    );
    expect(mappedProps).toEqual({ projects: projects }, { errorMessage: '' });
  });
  it('should map toggleNewPalette to props', () => {
    const mockAction = toggleNewPalette(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleNewPalette(false);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  it('should map setError to props', () => {
    const mockAction = setError('error');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setError('error');
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  it('should map setError to props', () => {
    const mockAction = setPalettes(palettes);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setPalettes(palettes);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
