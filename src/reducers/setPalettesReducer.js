export const setPalettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return action.palettes;
    default:
      return state;
  }
};
