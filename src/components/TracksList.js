import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Track from './Track';

const TracksList = ({ tracks, loadingStatus }) => (
  <div style={{ overflowY: 'hidden' }}>
    {loadingStatus === 'loading' ? (
      <div className="py-5">
        <div className="text-light text-center py-5 px-3">
          <Spinner animation="grow" />
          <h6>
            {'Fetching all the tracks...'.toUpperCase()}
          </h6>
        </div>
      </div>
    ) : (tracks.map((track, idx) => (
      <Track idx={idx} key={track.id} track={track} />
    )))}
  </div>
);
TracksList.propTypes = {
  tracks:
    PropTypes.instanceOf(Array).isRequired,
  loadingStatus:
    PropTypes.string.isRequired,
};
export default TracksList;
