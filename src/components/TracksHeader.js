import React from 'react';
import PropTypes from 'prop-types';

const TracksHeader = ({ album }) => (
  <>
    <div className="p-3 d-flex flex-row align-items-baseline justify-content-between">
      <div className="">
        <img src={album.imageUrl} alt={album.name} style={{ width: '100%' }} />
      </div>
      <div className="text-white text-end">
        <h2 className="">
          {album.name}
        </h2>
        <small>
          {`${album.trackCount} tracks`}
        </small>

      </div>
    </div>
  </>
);
TracksHeader.propTypes = {
  album:
    PropTypes.instanceOf(Object).isRequired,
};
export default TracksHeader;
