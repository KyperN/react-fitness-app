const init = { excercises: [], chosenDay: '' };

export const workoutReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_EXCERCISE':
      console.log(state);
      return { ...state, excercises: [...state.excercises, action.payload] };
    case 'REMOVE_EXCERCISE':
      const newArr = state.excercises.filter(
        (elem) => elem.name !== action.payload
      );
      return { ...state, excercises: [...newArr] };
    case 'CHOOSE_DAY':
      return { ...state, chosenDay: action.payload };
    default:
      return state;
  }
};
