/* eslint-disable react/prop-types */
import React from 'react';
import Album from './Album';

const Home = ({ albums }) => (
  <div className="conatiner-fluid homepage ">
    <div className="row g-0">
      <div className="col-6">

        {albums.slice(0, albums.length / 2).map((a, index) => (
          <Album key={a.id} album={a} index={index} columnNo="1" />
        ))}
      </div>
      <div className="col-6">

        {albums.slice(albums.length / 2).map((a, index) => (
          <Album key={a.id} album={a} index={index} columnNo="2" />
        ))}
      </div>
    </div>

  </div>
);
export default Home;
