import http from '../http-common';

const API_KEY = 'YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4';
const getAlbumTracks = (albumId) => http.get(`/${albumId}/tracks?apikey=${API_KEY}`);

const TrackService = {
  getAlbumTracks,

};
export default TrackService;
