/* eslint-disable react/prop-types */
import React from 'react';

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
export default TracksHeader;
