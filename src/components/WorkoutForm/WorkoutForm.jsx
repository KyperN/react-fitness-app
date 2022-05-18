import React from 'react';
import './WorkoutForm.scss';
import MuscleGroupForm from '../MuscleGroupForm/MuscleGroupForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Excercise from '../Excercise/Excercise';
import Loader from '../Loader/Loader';
import DayForm from '../DayForm/DayForm';
import { options } from '../../api/api';
export default function WorkoutForm() {
  const [muscle, setMuscle] = useState('');
  const [activeDay, setActiveDay] = useState('');
  const loading = useSelector((state) => state.excercises.loading);
  const excercises = useSelector((state) => state.excercises.fetchedExcercises);
  const dispatch = useDispatch();

  const chooseMuscle = (e) => {
    setMuscle(e.target.value.toLowerCase());
  };
  const chooseDay = (e) => {
    setActiveDay(e.target.value);
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    await axios
      .request(options(muscle))
      .then(function (response) {
        dispatch({
          type: 'LOADED',
          payload: response.data.filter((elem) => elem.equipment === 'barbell'),
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const addToWorkout = (name, equipment, img) => {
    const chosenExcercise = {
      name: name,
      equipment: equipment,
      img: img,
      day: activeDay,
    };
    dispatch({ type: 'ADD_EXCERCISE', payload: chosenExcercise });
  };

  useEffect(() => {
    fetchData();
  }, [muscle]);

  return (
    <div className="form">
      <DayForm chooseDay={chooseDay} />
      <MuscleGroupForm chooseMuscle={chooseMuscle} />
      <div className="excercises-block">
        {loading ? (
          <Loader />
        ) : (
          excercises.map((excercise) => {
            return (
              <Excercise
                addToWorkout={addToWorkout}
                name={excercise.name}
                equipment={excercise.equipment}
                img={excercise.gifUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
