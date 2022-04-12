import { Link } from 'react-router-dom';

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
    <div className="pink-bg text-light">
      <div className="p-5 text-center">
        <div className="pt-5">
          <h1>
            {'Pick a category!'.toUpperCase()}
          </h1>
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

    </div>
  );
};
export default Welcome;
