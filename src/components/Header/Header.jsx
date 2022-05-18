import React from 'react';
import './Header.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <div className="btn-group">
        <Link to="/create-workout">
          <Button text="Create workout" />
        </Link>
        <Link to="/days">
          <Button text="Your workouts" />
        </Link>
      </div>
    </div>
  );
}
