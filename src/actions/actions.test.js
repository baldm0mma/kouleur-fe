import * as actions from './index';
import * as mockData from '../utilities/mockData';

describe('Actions', () => {
  it('should have a type of SET_PROJECTS and a payload of an array of projects', () => {
    const expectedAction = {
      type: 'SET_PROJECTS',
      projects: mockData.projects
    };
    const result = actions.setProjects(mockData.projects);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of SET_PALETTES and a payload of an array of palettes', () => {
    const expectedAction = {
      type: 'SET_PALETTES',
      palettes: mockData.palettes
    };
    const result = actions.setPalettes(mockData.palettes);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of SET_CURRENT_PROJECT and a payload of a single project', () => {
    const expectedAction = {
      type: 'SET_CURRENT_PROJECT',
      id: 1,
      name: 'test_project_name'
    };
    const result = actions.setCurrentProject(1, 'test_project_name');
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of SET_ERROR and a payload of an error message', () => {
    const expectedAction = {
      type: 'SET_ERROR',
      errorMessage: mockData.errorMessage
    };
    const result = actions.setError(mockData.errorMessage);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of TOGGLE_NEW_PROJECT and a payload of a boolean', () => {
    const expectedAction = {
      type: 'TOGGLE_NEW_PROJECT',
      boolean: true
    };
    const result = actions.toggleNewProject(true);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of SET_CURRENT_PALETTE and a payload of a palette', () => {
    const expectedAction = {
      type: 'SET_CURRENT_PALETTE',
      palette: mockData.palettes[0]
    };
    const result = actions.setCurrentPalette(mockData.palettes[0]);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of TOGGLE_LOCK and a payload of a number', () => {
    const expectedAction = {
      type: 'TOGGLE_LOCK',
      num: 1
    };
    const result = actions.toggleLock(1);
    expect(result).toEqual(expectedAction);
  });
  it('should have a type of TOGGLE_NEW_PALETTE and a payload of a boolean', () => {
    const expectedAction = {
      type: 'TOGGLE_NEW_PALETTE',
      boolean: true
    };
    const result = actions.toggleNewPalette(true);
    expect(result).toEqual(expectedAction);
  });
});
