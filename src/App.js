import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Tracks from './components/Tracks';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/music_to_my_ears/" element={<Welcome />} />
        <Route exact path="/music_to_my_ears/albums/:criteria" element={<Home />} />
        <Route exact path="/music_to_my_ears/albums/:criteria/:id" element={<Tracks />} />
      </Routes>
    </Router>
  );
}

export default App;
