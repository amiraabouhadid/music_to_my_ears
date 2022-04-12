/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAlbumTracks } from '../redux/tracks/tracks';
import Track from './Track';
import TracksHeader from './TracksHeader';

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks, shallowEqual);
  const location = useLocation();
  const album = location.state;

  useEffect(() => {
    dispatch(getAlbumTracks(album.id));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row header-row pt-2 text-white">
          <div className="col-4">
            <Link
              to="/music_to_my_ears/"
              className="text-white fw-bold"
            >
              <BsChevronCompactLeft />
            </Link>
          </div>
          <div className="col-4 text-center"><p> Album Tracks</p></div>
          <div className="col-4 ">
            <AiOutlineSearch className=" fw-bold float-end" />
          </div>
        </div>
      </div>
      <div className="conatiner-fluid pink-bg">
        <TracksHeader
          album={album}
        />
        <div>
          <div className="fw-bold text-white header-row">
            <small className="p-1">
              {'Album/ Tracks Breakdown'.toUpperCase()}
            </small>

          </div>
          {tracks.map((track, idx) => (
            <Track idx={idx} key={track.id} track={track} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Tracks;