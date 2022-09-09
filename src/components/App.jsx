import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Video from './Video';
import Login from './Login';
import Navbar from './Navbar';
import Oneproduct from './pages/Oneproduct';
import Registration from './Registration';
import Products from './Products';

export default function App({ userSession, ProductById, allProducts }) {
  const [products, setProducts] = useState(allProducts || []);
  const [authState, setAuthState] = useState(userSession || null);
  const [videoStatus, setVideoStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVideoStatus(false);
    }, 6000);
  }, []);
  return (

    <>
      <Navbar authState={authState} setAuthState={setAuthState} />
      {/* {videoStatus ? <Video /> : null} */}
      <Video />
      <Routes>
        {/* <Route path="/" element={<Video />} /> */}
        <Route path="/" element={<Products path="/" allProducts={products} />} />
        <Route path="/products/:id" element={<Oneproduct product={ProductById} />} />
        <Route path="/signup" element={<Registration setAuthState={setAuthState} />} />
        <Route path="/signin" element={<Login setAuthState={setAuthState} />} />
      </Routes>

    </>

  );
}
