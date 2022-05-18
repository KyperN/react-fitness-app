import React from 'react';
import './DayForm.scss';
import { weekDays } from '../../misc/weekDays';
export default function DayForm({ chooseDay }) {
  return (
    <div>
      <select onChange={(e) => chooseDay(e)} name="days" id="days">
        <option disabled selected value>
          {' '}
          -- select a day --{' '}
        </option>
        {weekDays.map((elem) => {
          return <option value={elem}>{elem.toUpperCase()}</option>;
        })}
      </select>
    </div>
  );
}
