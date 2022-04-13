import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronCompactLeft } from 'react-icons/bs';
import Album from './Album';
import { getAlbums, cleanUp } from '../redux/albums/albums';

const Home = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const location = useLocation();
  const criteria = location.pathname.split('/').pop();
  const title = location.pathname.split('/').pop();
  useEffect(() => {
    dispatch(getAlbums(criteria));
    return () => {
      dispatch(cleanUp());
    };
  }, []);
  const [name, setName] = useState('');
  const [foundAlbums, setFoundAlbums] = useState(albums);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = albums.filter((album) => (
        album.name.toLowerCase().startsWith(keyword.toLowerCase())
      ));
      setFoundAlbums(results);
    } else {
      setFoundAlbums(albums);
    }
    setName(keyword);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row header-row pt-2 text-white">
          <div className="col-4">
            <Link className="text-light" to="/music_to_my_ears/">
              <BsChevronCompactLeft />
            </Link>

          </div>
          <div className="col-4 text-center">
            <p>
              {`${title}`.toUpperCase()}
            </p>

          </div>
          <div className="col-4 ">
            <input
              type="search"
              value={name}
              onChange={filter}
              placeholder="search..."
              className="w-75 border-0 border-rounded float-end"
              style={{ display: 'hidden' }}
              id="search-input"
            />

          </div>
        </div>
      </div>
      <div className="conatiner-fluid pink-bg">
        <div className="row g-0">
          <div className="col-6">

            {foundAlbums && foundAlbums.length > 0 ? (
              foundAlbums.slice(0, foundAlbums.length / 2).map((a, index) => (
                <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="1" />
              ))
            ) : (
              albums.slice(0, albums.length / 2).map((a, index) => (
                <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="1" />
              ))
            )}
          </div>
          <div className="col-6">

            {foundAlbums && foundAlbums.length > 0
              ? (foundAlbums.slice(foundAlbums.length / 2).map((a, index) => (
                <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="2" />
              ))) : (
                albums.slice(albums.length / 2).map((a, index) => (
                  <Album key={a.id} criteria={criteria} album={a} index={index} columnNo="2" />
                ))
              )}
          </div>
        </div>

      </div>
    </>
  );
};
export default Home;
