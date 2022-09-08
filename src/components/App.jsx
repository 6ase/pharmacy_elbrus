import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card';
import Video from './Video';
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Video />
      <Routes>
        <Route path="/Card" element={Card} />
      </Routes>
    </div>
  );
}
