import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Album = ({
  album, index, columnNo, criteria,
}) => {
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
          <small className="text-end float-end pt-2 align-text-bottom">
            {`${album.trackCount} tracks`}
          </small>
        </div>

      </Link>
    </div>
  );
};
Album.propTypes = {
  album:
  PropTypes.instanceOf(Object).isRequired,
  index:
  PropTypes.number.isRequired,
  columnNo:
  PropTypes.string.isRequired,
  criteria:
  PropTypes.string.isRequired,
};
export default Album;
