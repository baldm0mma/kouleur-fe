export const toggleNewPaletteReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_PALETTE':
      return action.boolean;
    default:
      return state;
  }
};
