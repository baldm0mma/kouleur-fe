import { combineReducers } from 'redux';
import { setCurrentPaletteReducer } from './setCurrentPaletteReducer';
import { setCurrentProjectReducer } from './setCurrentProjectReducer';
import { setErrorReducer } from './setErrorReducer';
import { setPalettesReducer } from './setPalettesReducer';
import { setProjectsReducer } from './setProjectsReducer';
import { toggleNewPaletteReducer } from './toggleNewPaletteReducer';
import { toggleNewProjectReducer } from './toggleNewProjectReducer';

export const rootReducer = combineReducers({
  currentPalette: setCurrentPaletteReducer,
  currentProject: setCurrentProjectReducer,
  errorMessage: setErrorReducer,
  newPaletteToggle: toggleNewPaletteReducer,
  newProjectToggle: toggleNewProjectReducer,
  palettes: setPalettesReducer,
  projects: setProjectsReducer
});
