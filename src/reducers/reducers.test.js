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
      const result = setCurrentPaletteReducer(mockData.setCurrentPaletteReducer_defaultState, actions.setCurrentPalette(mockData.palettes[0]));
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
      const result = setCurrentPaletteReducer(mockData.setCurrentPaletteReducer_defaultState, actions.toggleLock(1));
      expect(result).toEqual(expected);
    });
  });
});