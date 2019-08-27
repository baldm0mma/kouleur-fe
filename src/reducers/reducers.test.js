import { setCurrentPaletteReducer } from './setCurrentPaletteReducer';
import { setCurrentProjectReducer } from './setCurrentProjectReducer';
import { setErrorReducer } from './setErrorReducer';
import { setPalettesReducer } from './setPalettesReducer';
import { setProjectsReducer } from './setProjectsReducer';
import { toggleNewPaletteReducer } from './toggleNewPaletteReducer';
import { toggleNewProjectReducer } from './toggleNewProjectReducer';
import * as actions from '../actions/index';
import * as mockData from '../utilities/mockData';

describe('reducers', () => {
  describe('setCurrentPaletteReducer', () => {
    it('should return the initial state', () => {
      const expected = mockData.setCurrentPaletteReducer_defaultState;
      const result = setCurrentPaletteReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle SET_CURRENT_PALETTE', () => {
      const expected = mockData.palettes[0];
      const result = setCurrentPaletteReducer(
        mockData.setCurrentPaletteReducer_defaultState,
        actions.setCurrentPalette(mockData.palettes[0])
      );
      expect(result).toEqual(expected);
    });
    it('should handle TOGGLE_LOCK', () => {
      const expected = [
        { id: 0, hex: '', isLocked: false },
        { id: 1, hex: '', isLocked: true },
        { id: 2, hex: '', isLocked: false },
        { id: 3, hex: '', isLocked: false },
        { id: 4, hex: '', isLocked: false }
      ];
      const result = setCurrentPaletteReducer(
        mockData.setCurrentPaletteReducer_defaultState,
        actions.toggleLock(1)
      );
      expect(result).toEqual(expected);
    });
  });
  describe('setCurrentProjectReducer', () => {
    it('should return the initial state', () => {
      const expected = {};
      const result = setCurrentProjectReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle SET_CURRENT_PROJECT', () => {
      const expected = mockData.projects[0];
      const result = setCurrentProjectReducer(
        {},
        actions.setCurrentProject(1, 'YumTimTumTam')
      );
      expect(result).toEqual(expected);
    });
  });
  describe('setErrorReducer', () => {
    it('should return the initial state', () => {
      const expected = '';
      const result = setErrorReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle SET_ERROR', () => {
      const expected = mockData.errorMessage;
      const result = setErrorReducer(
        '',
        actions.setError(mockData.errorMessage)
      );
      expect(result).toEqual(expected);
    });
  });
  describe('setPalettesReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = setPalettesReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle SET_PALETTES', () => {
      const expected = mockData.palettes;
      const result = setPalettesReducer(
        '',
        actions.setPalettes(mockData.palettes)
      );
      expect(result).toEqual(expected);
    });
  });
  describe('setProjectsReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = setProjectsReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle SET_PROJECTS', () => {
      const expected = mockData.projects;
      const result = setProjectsReducer(
        '',
        actions.setProjects(mockData.projects)
      );
      expect(result).toEqual(expected);
    });
  });
  describe('toggleNewPaletteReducer', () => {
    it('should return the initial state', () => {
      const expected = false;
      const result = toggleNewPaletteReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle TOGGLE_NEW_PALETTE', () => {
      const expected = true;
      const result = toggleNewPaletteReducer(
        '',
        actions.toggleNewPalette(true)
      );
      expect(result).toEqual(expected);
    });
  });
  describe('toggleNewProjectReducer', () => {
    it('should return the initial state', () => {
      const expected = false;
      const result = toggleNewProjectReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should handle TOGGLE_NEW_PROJECT', () => {
      const expected = true;
      const result = toggleNewProjectReducer(
        '',
        actions.toggleNewProject(true)
      );
      expect(result).toEqual(expected);
    });
  });
});
