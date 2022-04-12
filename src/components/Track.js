/* eslint-disable react/prop-types */
import { BsArrowRightCircle } from 'react-icons/bs';

const Track = ({ track, idx }) => (
  <div className={idx % 2 !== 0 ? 'dark-bg p-2' : 'p-2'}>

    <a
      href={track.previewUrl}
      style={{ textDecoration: 'none' }}
      className="text-light pt-3 d-flex flex-row flex-nowrap align-items-baseline justify-content-between"
    >
      <p className="fw-bold" style={{ fontSize: '0.85rem' }}>{track.name.toUpperCase()}</p>

      <p>
        {`${track.playbackSeconds} seconds`}

        <BsArrowRightCircle className="mx-2 text-light" />

      </p>
    </a>

  </div>

);
export default Track;
