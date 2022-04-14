import { Link } from 'react-router-dom';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { FaMusic } from 'react-icons/fa';
import { GiMusicalScore, GiMusicalNotes } from 'react-icons/gi';

const Welcome = () => {
  const links = [
    {
      id: 1,
      text: 'top albums',
      path: '/music_to_my_ears/albums/top',
      color: 'rgb(35,181,78)',
    },
    {
      id: 2,
      text: 'new albums',
      path: '/music_to_my_ears/albums/new',
      color: 'rgb(247,90,46)',
    },
    {
      id: 3,
      text: 'staff picks',
      path: '/music_to_my_ears/albums/picks',
      color: 'rgb(93, 93, 235)',
    },
  ];
  return (
    <div className="welcome-page text-light">
      <div className="p-4 dark-bg text-center">
        <FaMusic />
        <GiMusicalScore />
        <GiMusicalNotes />
        <h1>
          {'Music to my ears'.toUpperCase()}
        </h1>
      </div>
      <div className="p-5 text-center">
        <div>
          <h2>
            {'Pick a category!'.toUpperCase()}
          </h2>
        </div>

        {links.map((link) => (
          <div key={link.id} style={{ backgroundColor: `${link.color}` }} className=" border my-4 p-5">
            <h3>
              <Link className="text-light" to={link.path} style={{ textDecoration: 'none' }}>
                {link.text.toUpperCase()}
              </Link>

            </h3>
          </div>

        ))}
      </div>
      <div className="dark-bg fixed-bottom p-3 text-center">
        {'Amira Abouhadid '}
        <AiFillCopyrightCircle />
        {' Creative Commons'}

      </div>

    </div>
  );
};
export default Welcome;
