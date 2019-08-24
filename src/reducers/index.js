import { combineReducers } from 'redux';
import { setCurrentProjectReducer } from './setCurrentProjectReducer';
import { setPalettesReducer } from './setPalettesReducer';
import { setProjectsReducer } from './setProjectsReducer';
import { setErrorReducer } from './setErrorReducer';
import {toggleNewProjectReducer} from './toggleNewProjectReducer'

export const rootReducer = combineReducers({
  currentProject: setCurrentProjectReducer,
  palettes: setPalettesReducer,
  projects: setProjectsReducer,
  error: setErrorReducer,
  newProjectToggle: toggleNewProjectReducer
});
