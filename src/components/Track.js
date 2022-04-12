/* eslint-disable react/prop-types */
import { BsArrowRightCircle } from 'react-icons/bs';

const Track = ({ track, idx }) => (
  <div className={idx % 2 !== 0 ? 'dark-bg p-2' : 'p-2'}>
    <div className="text-light pt-3 d-flex flex-row align-items-baseline justify-content-between">
      <p className="fw-bold">{track.name}</p>

      <p>
        {`${track.playbackSeconds} seconds`}
        <a href={track.previewUrl} className="mx-2 text-light">
          <BsArrowRightCircle />

        </a>

      </p>

    </div>

  </div>

);
export default Track;
