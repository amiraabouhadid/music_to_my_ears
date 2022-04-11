/* eslint-disable react/prop-types */
import React from 'react';

const Home = ({ albums }) => (
  <div>
    {albums.map((album) => (
      <div key={album.id}>
        <p>{album.name}</p>
      </div>
    ))}
  </div>
);
export default Home;
