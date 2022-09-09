import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Oneproduct from './pages/Oneproduct';
import Registration from './Registration';
import Products from './Products';
import Carousel from './Carousel';
import Backet from './pages/Backet';

export default function App({ userSession, ProductById, allProducts }) {
  const [products, setProducts] = useState(allProducts || []);
  const [authState, setAuthState] = useState(userSession || null);

  return (
    <>
      <Navbar authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/" element={<Products path="/" allProducts={products} />} />
        <Route path="/products/:id" element={<Oneproduct product={ProductById} />} />
        <Route path="/signup" element={<Registration setAuthState={setAuthState} />} />
        <Route path="/signin" element={<Login setAuthState={setAuthState} />} />
        <Route path="/backet" element={<Backet />} />
      </Routes>

    </>

  );
}
