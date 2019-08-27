import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatchToProps, mapStateToProps, Picker } from './Picker.js';
import { toggleLock, setCurrentPalette, toggleNewPalette } from '../../actions';

describe('Picker', () => {
  let wrapper;
  let currentPalette;
  beforeEach(() => {
    currentPalette = [
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' },
      { hex: 'ffffff' }
    ];
    wrapper = shallow(
      <Picker
        currentPalette={currentPalette}
        setCurrentPalette={jest.fn()}
        toggleNewPalette={jest.fn()}
      />
    );
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should return a hex code', () => {
    let hexCode = wrapper.instance().generateHex();
    expect(hexCode.length).toEqual(6);
  });
  it('should mapStateToProps', () => {
    const mappedProps = mapStateToProps({ currentPalette: currentPalette });
    expect(mappedProps).toEqual({ currentPalette });
  });
  it('should map setCurrentPalette to props', () => {
    const mockDispatch = jest.fn();
    const mockAction = setCurrentPalette({ currentPalette });
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentPalette({ currentPalette });
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  it('should map toggleNewPalette', () => {
    const mockDispatch = jest.fn();
    const mockAction = toggleNewPalette(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleNewPalette(false);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
