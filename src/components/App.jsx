import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Registration from './Registration';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Routes>
          <Route path="/registr" element={<Registration />} />

        </Routes>
      </div>
    </div>

  );
}
