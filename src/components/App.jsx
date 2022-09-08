import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Oneproduct from './pages/Oneproduct';
import Registration from './Registration';

export default function App({ ProductById }) {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Routes>
          <Route path="/registr" element={<Registration />} />
          <Route path="/products/:id" element={<Oneproduct product={ProductById} />} />
        </Routes>
      </div>
    </div>

  );
}
