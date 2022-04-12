/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getAlbumImage } from '../redux/albums/albums';

const Album = ({
  album, index, columnNo, criteria,
}) => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums, shallowEqual);

  const addImagesToAlbums = () => {
    albums.forEach((album) => {
      dispatch(getAlbumImage(album.id));
    });
  };
  useEffect(() => {
    addImagesToAlbums();
  }, []);
  const isDarkBg = (index, columnNo) => {
    if (index % 2 === 0 && columnNo === '1') {
      return true;
    }
    if (index % 2 !== 0 && columnNo === '2') {
      return true;
    }
    return false;
  };
  return (
    <div
      style={{ height: '22.5rem', overflowY: 'hidden' }}
      className={isDarkBg(index, columnNo) ? (
        'dark-bg p-3'
      ) : ('p-3')}

    >
      <Link
        to={`/music_to_my_ears/albums/${criteria}/${album.id}`}
        className="text-light"
        state={album}
      >
        <div className="text-end">
          <BsArrowRightCircle />
        </div>
        <div className=" text-center" style={{ overflowX: 'hidden' }}>
          <img src={album.imageUrl} alt={album.name} width="165" className="" />
        </div>
        <div className="text-light  fw-bolder py-3">
          <p className="float-end text-end" style={{ fontSize: '0.85rem', width: '100%' }}>
            {album.name.toUpperCase()}
          </p>
          <br />
          <h5 className="text-end float-end pt-2 align-text-bottom">
            {album.trackCount}
          </h5>
        </div>

      </Link>
    </div>
  );
};
export default Album;
