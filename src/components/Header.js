import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => (
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
);
export default Header;
