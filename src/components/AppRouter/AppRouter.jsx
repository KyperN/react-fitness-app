import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import WorkoutForm from '../WorkoutForm/WorkoutForm';
import Days from '../Days/Days';
import Workout from '../Workout/Workout';
export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/days" element={<Days />} />
        <Route path="create-workout" element={<WorkoutForm />} />
        <Route path="/workout" element={<Workout />} />;
      </Routes>
    </div>
  );
}
