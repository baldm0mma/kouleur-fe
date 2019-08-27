import React from 'react';
import { shallow } from 'enzyme';
import {mapDispatchToProps, Swatch} from './Swatch.js'
import { toggleLock, setCurrentPalette } from '../../actions';


describe('Swatch', () => {
  let hexLight;
  let hexDark;

  beforeEach(() => {
    hexLight = 'ffffff'
    hexDark = '000000'
  })
  it('should match the snapshot', () => {
    let wrapper = shallow(<Swatch hex={hexLight} isLocked={true}  num={1}/>)
    expect(wrapper).toMatchSnapshot();
  })
  it('should match the snapshot', () => {
    let wrapper = shallow(<Swatch hex={hexDark} isLocked={false}  num={1}/>)
    expect(wrapper).toMatchSnapshot();
  })
  it('maps toggle lock to props', () => {
    const mockDispatch = jest.fn();
    const mockAction = toggleLock(true)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleLock(true);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
  it('maps setCurrentPalette to props', () => {
    const mockDispatch = jest.fn();
    const mockAction = setCurrentPalette([hexDark])
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentPalette([hexDark]);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
  it.skip('should return the right font color based on the hex code', () => {
    let wrapper = shallow(<Swatch hex={hexLight} isLocked={true}  num={1}  toggleLock={jest.fn()}/> )
    wrapper.find('.color-swatch').simulate('click')
    expect(wrapper.instance().toggleLock).toHaveBeenCalled();
  })
})