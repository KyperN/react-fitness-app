import React from 'react';
import './Excercise.scss';

export default function Excercise({
  name,
  equipment,
  img,
  addToWorkout,
  visible,
}) {
  return (
    <div className="card">
      <h1 className="name">{name}</h1>
      <p className="equipment">{equipment}</p>
      <img className="img" src={img} alt="Excercise gif" />
      <button
        onClick={() => {
          addToWorkout(name, equipment, img);
        }}>
        Add
      </button>
    </div>
  );
}
