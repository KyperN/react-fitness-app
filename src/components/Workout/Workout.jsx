import React from 'react';
import { useSelector } from 'react-redux';
import Excercise from '../Excercise/Excercise';
import { Link } from 'react-router-dom';
import './Workout.scss';
import { useDispatch } from 'react-redux';
export default function Wokrout({ day }) {
  const dispatch = useDispatch();
  const excercises = useSelector((state) => state.workouts.excercises);
  const chosenDay = useSelector((state) => state.workouts.chosenDay);
  const removeExcercise = (name) => {
    dispatch({ type: 'REMOVE_EXCERCISE', payload: name });
  };
  const filteredExcercises = excercises.filter(
    (elem) => elem.day === chosenDay
  );
  return (
    <div className="content">
      <Link to="/days">
        <button>Back</button>
      </Link>
      {filteredExcercises.length === 0 ? (
        <h1 className="message">No workouts for this day</h1>
      ) : (
        filteredExcercises.map((elem) => {
          return (
            <div className="content-excercise">
              <Excercise
                name={elem.name}
                equipment={elem.equipment}
                img={elem.img}
              />
              <button onClick={() => removeExcercise(elem.name)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
}
