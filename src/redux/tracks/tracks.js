import TrackService from '../../services/TrackService';

const TRACKS_RETRIEVED = 'app/tracks/TRACKS_RETRIEVED ';

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TRACKS_RETRIEVED:
      return [...payload];

    default:
      return state;
  }
};
export const getAlbumTracksActionCreator = (albumTracks) => ({
  type: TRACKS_RETRIEVED,
  payload: albumTracks,
});

export const getAlbumTracks = (albumId) => async (dispatch) => {
  try {
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
