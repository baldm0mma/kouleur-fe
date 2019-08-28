import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatchToProps, PaletteCard } from './PaletteCard.js';
import { setPalettes, setError } from '../../actions';


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
  
  it('should map setPallete', () => {
  const mockDispatch = jest.fn();
  const mockAction = setPalettes([{pallete1: 'fffff'}]);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.setPalettes([{pallete1: 'fffff'}]);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
});
  it('should map setError', () => {
    const mockDispatch = jest.fn();
    const mockAction = setError('Error');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setError('Error');
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  
});
