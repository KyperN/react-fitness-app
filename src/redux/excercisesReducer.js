const init = { fetchedExcercises: [], loading: false };

export const excercisesReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'LOADED':
      return { ...state, loading: false, fetchedExcercises: action.payload };
    default:
      return state;
  }
};
