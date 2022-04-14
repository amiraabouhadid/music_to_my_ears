import TrackService from '../../services/TrackService';

const TRACKS_RETRIEVED = 'app/tracks/TRACKS_RETRIEVED ';
const TRACKS_REMOVED = 'app/tracks/TRACKS_REMOVED';
const TRACKS_LOADING = 'app/tracks/TRACKS_LOADING';

const initialState = {
  status: 'idle',
  entities: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRACKS_LOADING:
      return { ...state, status: 'loading' };
    case TRACKS_RETRIEVED:
      return { ...state, status: 'idle', entities: payload };
    case TRACKS_REMOVED:
      return { ...state, entities: [] };
    default:
      return state;
  }
};
export const getAlbumTracksActionCreator = (albumTracks) => ({
  type: TRACKS_RETRIEVED,
  payload: albumTracks,
});
export const tracksCleanUpActionCreator = () => ({ type: TRACKS_REMOVED });
export const cleanUp = () => async (dispatch) => {
  dispatch(tracksCleanUpActionCreator());
};
export const tracksLoading = () => ({ type: TRACKS_LOADING });
export const getAlbumTracks = (albumId) => async (dispatch) => {
  try {
    dispatch(tracksLoading());
    const res = await TrackService.getAlbumTracks(albumId);
    const albumTracks = [];
    res.data.tracks.forEach((element) => {
      albumTracks.push({
        id: element.id,
        name: element.name,
        playbackSeconds: element.playbackSeconds,
        previewUrl: element.previewURL,
      });
    });

    dispatch(getAlbumTracksActionCreator(albumTracks));
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
export default reducer;
