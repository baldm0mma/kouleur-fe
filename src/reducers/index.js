import { combineReducers } from 'redux';
import { setCurrentProjectReducer } from './setCurrentProjectReducer';
import { setPalettesReducer } from './setPalettesReducer';
import { setProjectsReducer } from './setProjectsReducer';
import { setErrorReducer } from './setErrorReducer';

export const rootReducer = combineReducers({
  currentProject: setCurrentProjectReducer,
  palettes: setPalettesReducer,
  projects: setProjectsReducer,
  error: setErrorReducer
});
