import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Tracks from './components/Tracks';

function App() {
  return (

    <Routes>
      <Route exact path="/music_to_my_ears/" element={<Welcome />} />
      <Route exact path="/music_to_my_ears/albums/:criteria" element={<Home />} />
      <Route exact path="/music_to_my_ears/albums/:criteria/:id" element={<Tracks />} />
    </Routes>

  );
}

export default App;
