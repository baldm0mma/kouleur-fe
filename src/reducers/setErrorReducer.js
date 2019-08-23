export const setErrorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR_REDUCER':
      return action.error;
    default:
      return state;
  }
};
