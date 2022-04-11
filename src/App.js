import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Home from './components/Home';
import Header from './components/Header';
import { getTopAlbums } from './redux/albums/albums';

function App() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums, shallowEqual);
  useEffect(() => {
    dispatch(getTopAlbums());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/music_to_my_ears/" element={<Home albums={albums} />} />

      </Routes>
    </Router>
  );
}

export default App;
