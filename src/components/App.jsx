import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Video from './Video';
import Login from './Login';
import Navbar from './Navbar';
import Registration from './Registration';

export default function App({ userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  return (

    <div className="container">
      <div className="row">
        <Video />
        <Navbar authState={authState} setAuthState={setAuthState} />
        <Routes>

          <Route path="/signup" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/signin" element={<Login setAuthState={setAuthState} />} />

        </Routes>
      </div>

    </div>
  );
}
