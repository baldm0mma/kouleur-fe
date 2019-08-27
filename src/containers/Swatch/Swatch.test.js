import React from 'react';
import { shallow } from 'enzyme';
import {mapDispatchToProps, Swatch} from './Swatch.js'


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



})