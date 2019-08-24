export const setCurrentPaletteReducer = (state = [
  {
    hex: '',
    isLocked: false
  },
  {
    hex: '',
    isLocked: false
  },
  {
    hex: '',
    isLocked: false
  },
  {
    hex: '',
    isLocked: false
  },
  {
    hex: '',
    isLocked: false
  }
], action) => {
  switch (action.type) {
    case 'SET_CURRENT_PALETTE':
      return action.palette;
    default:
      return state;
  }
};
