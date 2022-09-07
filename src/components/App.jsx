import React from 'react';
import { Routes } from 'react-router-dom';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Routes/>
      </div>
    </div>

  );
}
