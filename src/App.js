import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import Missions from './components/Pages/Missions';
import Profile from './components/Pages/Profile';
import Rockets from './components/Pages/Rockets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
