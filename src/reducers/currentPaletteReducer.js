export const setCurrentPaletteReducer = (
  state = [
    {
      id: 0,
      hex: '',
      isLocked: false
    },
    {
      id: 1,
      hex: '',
      isLocked: false
    },
    { id: 2, hex: '', isLocked: false },
    { id: 3, hex: '', isLocked: false },
    { id: 4, hex: '', isLocked: false }
  ],
  action
) => {
  switch (action.type) {
    case 'SET_CURRENT_PALETTE':
      return action.palette;
    case 'TOGGLE_LOCK':
      let toggledTodo = state.map(color => {
        if (color.id === action.num) {
          color.isLocked = !color.isLocked;
        }
        return color;
      });
      return toggledTodo;
    default:
      return state;
  }
};
