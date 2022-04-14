import React, { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAlbumTracks, cleanUp } from '../redux/tracks/tracks';
import TracksHeader from './TracksHeader';
import TracksList from './TracksList';

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.entities, shallowEqual);
  const loadingStatus = useSelector((state) => state.tracks.status, shallowEqual);

  const location = useLocation();
  const album = location.state;
  const criteria = location.pathname.split('/')[3];

  useEffect(() => {
    dispatch(getAlbumTracks(album.id));
    return () => {
      dispatch(cleanUp());
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row header-row pt-2 text-white">
          <div className="col-4">
            <Link
              to={`/music_to_my_ears/albums/${criteria}`}
              className="text-white fw-bold"
            >
              <BsChevronCompactLeft />
            </Link>
          </div>
          <div className="col-4 text-center"><p> Album Tracks</p></div>
          <div className="col-4 ">
            <Link to="/music_to_my_ears/">
              <GiHamburgerMenu className=" text-light float-end" />
            </Link>
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
          <TracksList tracks={tracks} loadingStatus={loadingStatus} />

        </div>

      </div>
    </>
  );
};

export default Tracks;
