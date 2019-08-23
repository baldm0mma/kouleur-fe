export const setCurrentProjectReducer = (state = {}, action) => {
  const { id, name } = action;
  switch (action.type) {
    case 'SET_CURRENT_PROJECT':
      return { id, name };
    default:
      return state;
  }
};
