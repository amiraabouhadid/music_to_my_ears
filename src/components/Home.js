/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Album from './Album';

const Home = ({ albums }) => (
  <>
    <div className="container-fluid">
      <div className="row header-row pt-2 text-white">
        <div className="col-4">
          <p className="fw-bold">2022</p>
        </div>
        <div className="col-4 text-center"><p> Top Albums</p></div>
        <div className="col-4 ">
          <AiOutlineSearch className=" fw-bold float-end" />
        </div>
      </div>
    </div>
    <div className="conatiner-fluid pink-bg">
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
  </>
);
export default Home;
