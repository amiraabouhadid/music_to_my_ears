/* eslint-disable no-case-declarations */
import AlbumService from '../../services/AlbumService';

const TOP_ALBUMS_RETRIEVED = 'app/albums/TOP_ALBUMS_RETRIEVED';
const ALBUM_IMAGE_RETRIEVED = 'app/albums/ALBUMS_IMAGE_RETRIEVED';
const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TOP_ALBUMS_RETRIEVED:
      let albumsSaved;
      if (localStorage.getItem('albums')) {
        albumsSaved = JSON.parse(localStorage.getItem('albums'));
        return [...albumsSaved];
      }
      localStorage.setItem('albums', JSON.stringify(payload));
      return [...payload];
    case ALBUM_IMAGE_RETRIEVED:
      const albumsWithImages = state.map((album) => {
        if (album.id !== payload.albumId) {
          return album;
        }
        return { ...album, imageUrl: payload.albumImage };
      });
      localStorage.setItem('albums', JSON.stringify(albumsWithImages));
      return [...albumsWithImages];

    default:
      return state;
  }
};
export const getTopAlbumsActionCreator = (topAlbums) => ({
  type: TOP_ALBUMS_RETRIEVED,
  payload: topAlbums,
});
export const getAlbumImageActionCreator = (albumImage, albumId) => ({
  type: ALBUM_IMAGE_RETRIEVED,
  payload: {
    albumImage,
    albumId,
  },
});
export const getAlbumImage = (albumId) => async (dispatch) => {
  try {
    const imagesRes = await AlbumService.getTopAlbumsImages(albumId);
    const albumImage = imagesRes.data.images[0].url;
    dispatch(getAlbumImageActionCreator(albumImage, albumId));
    return Promise.resolve(imagesRes);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getTopAlbums = () => async (dispatch) => {
  try {
    const res = await AlbumService.getTopAlbumsInfo();
    const topAlbums = [];

    res.data.albums.forEach(async (element) => {
      topAlbums.push({
        id: element.id,
        name: element.name,
        trackCount: element.trackCount,

      });
    });
    dispatch(getTopAlbumsActionCreator(topAlbums));
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default reducer;
