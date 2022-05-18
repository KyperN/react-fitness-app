import React from 'react';
import './Days.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function Workouts() {
  const dispatch = useDispatch();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const setDay = (day) => {
    dispatch({ type: 'CHOOSE_DAY', payload: day });
  };
  return (
    <div className="container">
      {days.map((elem) => {
        return (
          <div className="days">
            <div className="day">
              <Link to="/workout">
                <p
                  onClick={() => {
                    setDay(elem);
                  }}
                  className="day-title">
                  {elem}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//Here will be Workout map
