import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatchToProps, mapStateToProps, App} from './App.js';
import { setProjects, setPalettes, setError, setCurrentProject } from '../../actions';

describe('App', () => {
  let errorMessage
  let newProjectToggle
  let currentProject
  let newPaletteToggle
  let wrapper
  beforeEach(() => {
    errorMessage = ''
    newProjectToggle = false
    currentProject = {project_name: 'Project', id: 1}
    newPaletteToggle = false
    wrapper = shallow(<App errorMessage={errorMessage} 
    newProjectToggle={newProjectToggle} 
    currentProject={currentProject}
    newPaletteToggle={newPaletteToggle}/>)

  })
  it('should match the snapshot', () => {
     expect(wrapper).toMatchSnapshot();
  })
   it('should map setPalletes', () => {
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
    it('should map setCurrentProject', () => {
    const mockDispatch = jest.fn();
    const mockAction = setCurrentProject({project_name: '1', id: 1});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentProject({project_name: '1', id: 1});
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
    it('should map setCurrentProject', () => {
    const mockDispatch = jest.fn();
    const mockAction = setProjects([{project_name: '1', id: 1}]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setProjects([{project_name: '1', id: 1}]);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
    it('should map state to props', () => {
    const mappedProps = mapStateToProps(
      { currentProject: currentProject },
      { errorMessage: '' },
      {newProjectToggle: false},
      {newPaletteToggle: false}
    );
    expect(mappedProps).toEqual({ currentProject });
  });
  


})


