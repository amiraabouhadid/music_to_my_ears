import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Home from './components/Home';
import Tracks from './components/Tracks';
import { getTopAlbums } from './redux/albums/albums';

function App() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums, shallowEqual);

  useEffect(() => {
    dispatch(getTopAlbums());
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/music_to_my_ears/" element={<Home albums={albums} />} />
        <Route exact path="/music_to_my_ears/:id" element={<Tracks />} />
      </Routes>
    </Router>
  );
}

export default App;
