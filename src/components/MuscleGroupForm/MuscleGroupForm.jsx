import React from 'react';
import { bodyParts } from '../../misc/bodyParts';
import './MuscleGroupForm.scss';
export default function MuscleGroupForm({ chooseMuscle }) {
  return (
    <div>
      <select
        onChange={(e) => chooseMuscle(e)}
        name="excercises"
        id="excercises">
        <option disabled selected value>
          {' '}
          -- select muscle group --{' '}
        </option>
        {bodyParts.map((elem) => {
          return <option value={elem}>{elem.toUpperCase()}</option>;
        })}
      </select>
    </div>
  );
}
