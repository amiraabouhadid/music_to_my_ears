/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Album from './Album';
import HomeHeader from './Homeheader';
import { getAlbums } from '../redux/albums/albums';

const Home = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums, shallowEqual);
  const location = useLocation();
  const criteria = location.pathname.split('/').pop();

  useEffect(() => {
    dispatch(getAlbums(criteria));
  }, []);
  return (
    <>
      <HomeHeader />
      <div className="conatiner-fluid pink-bg">
        <div className="row g-0">
          <div className="col-6">

            {albums.slice(0, albums.length / 2).map((a, index) => (
              <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="1" />
            ))}
          </div>
          <div className="col-6">

            {albums.slice(albums.length / 2).map((a, index) => (
              <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="2" />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};
export default Home;
