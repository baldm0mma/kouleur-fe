export const toggleNewProjectReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_PROJECT':
      return action.boolean;
    default:
      return state;
  }
};
