import React from 'react';
import { shallow } from 'enzyme';
import {mapStateToProps, mapDispatchToProps, NewProjectModal} from './NewProjectModal.js'
import { setCurrentProject, toggleNewProject, setError, setProjects } from '../../actions';


describe('New Project Modal',() => {
  let wrapper;
  let projects;
  let mockDispatch
  beforeEach(() => {
    projects = [{project_name: 'evans fun proj', id: 2}]
    wrapper = shallow(<NewProjectModal projects={projects} errorMessage={''}/>)
    mockDispatch = jest.fn()
    setCurrentProject=jest.fn()
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should map state to props', () => {
    const mappedProps = mapStateToProps({projects: projects}, {errorMessage: ''});
    expect(mappedProps).toEqual({projects: projects}, {errorMessage: ''});
  })
  it('should map setCurrentProject to props', () => {
    const mockAction = setCurrentProject(projects[0]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentProject(projects[0])
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
   it('should map toggleNewProject to props', () => {
    const mockAction = toggleNewProject(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleNewProject(false)
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
  it('should map setError to props', () => {
    const mockAction = setError('error');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setError('error')
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
  it('should map setError to props', () => {
    const mockAction = setProjects(projects);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setProjects(projects);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
  it.skip('should call setCurrentProject after makeNewProject', () => {
    wrapper.instance().makeNewProject()
    expect(setCurrentProject).toHaveBeenCalled();
  })

})