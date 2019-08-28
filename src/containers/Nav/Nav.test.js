import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatchToProps, mapStateToProps, Nav } from './Nav.js';
import { setProjects, setPalettes, setError, setCurrentProject, toggleNewProject } from '../../actions';

describe('Nav', () => {
  let currentProject
  let projects
  let wrapper

  beforeEach(() => {
    currentProject = {project_name: 'Project', id: 1}
    projects = [{project_name: 'Project', id: 1}]
    wrapper = shallow(<Nav  currentProject={currentProject} projects={projects}/>)
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
    it('should map set projects', () => {
    const mockDispatch = jest.fn();
    const mockAction = setProjects([{project_name: '1', id: 1}]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setProjects([{project_name: '1', id: 1}]);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
    it('should map toggleNewProject', () => {
    const mockDispatch = jest.fn();
    const mockAction = toggleNewProject(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleNewProject(false);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);  
    })
    it('should map state to props', () => {
    const mappedProps = mapStateToProps(
      { currentProject: currentProject },
      { projects: projects }
    );
    expect(mappedProps).toEqual({ currentProject });
  });
  
  


})


