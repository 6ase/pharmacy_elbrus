import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card';
import Video from './Video';

export default function App() {
  return (
    <>
      <Video />
      <Routes>
        <Route path="/Card" element={Card} />
      </Routes>
    </>
  );
}
