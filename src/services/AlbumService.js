import http from '../http-common';

const API_KEY = 'YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4';
const getTopAlbumsInfo = () => http.get(`/top?apikey=${API_KEY}`);
const getNewAlbumsInfo = () => http.get(`/new?apikey=${API_KEY}`);
const getPicksAlbumsInfo = () => http.get(`/picks?apikey=${API_KEY}`);
const getAlbumImage = (albumId) => http.get(`/${albumId}/images?apikey=${API_KEY}`);
const AlbumService = {
  getTopAlbumsInfo,
  getNewAlbumsInfo,
  getPicksAlbumsInfo,
  getAlbumImage,
};
export default AlbumService;
