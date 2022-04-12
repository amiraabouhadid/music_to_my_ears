import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const HomeHeader = () => {
  const location = useLocation();
  const title = location.pathname.split('/').pop();
  return (
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
          <Link to="/music_to_my_ears/">
            <GiHamburgerMenu className=" text-light float-end" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;
