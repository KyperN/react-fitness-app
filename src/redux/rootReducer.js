import { combineReducers } from 'redux';
import { excercisesReducer } from './excercisesReducer';
import { workoutReducer } from './workoutReducer';
export const rootReducer = combineReducers({
  excercises: excercisesReducer,
  workouts: workoutReducer,
});
