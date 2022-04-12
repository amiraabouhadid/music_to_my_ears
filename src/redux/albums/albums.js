/* eslint-disable no-case-declarations */
import AlbumService from '../../services/AlbumService';

const ALBUMS_RETRIEVED = 'app/albums/ALBUMS_RETRIEVED';
const ALBUM_IMAGE_RETRIEVED = 'app/albums/ALBUM_IMAGE_RETRIEVED';
const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALBUMS_RETRIEVED:
      return [...payload];
    case ALBUM_IMAGE_RETRIEVED:
      const albumsWithImages = state.map((album) => {
        if (album.id !== payload.albumId) {
          return album;
        }
        return { ...album, imageUrl: payload.albumImage };
      });
      return [...albumsWithImages];

    default:
      return state;
  }
};
export const getAlbumsActionCreator = (albums) => ({
  type: ALBUMS_RETRIEVED,
  payload: albums,
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
    const imagesRes = await AlbumService.getAlbumImage(albumId);
    const albumImage = imagesRes.data.images[0].url;
    dispatch(getAlbumImageActionCreator(albumImage, albumId));
    return Promise.resolve(imagesRes);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getAlbums = (criteria) => async (dispatch) => {
  let func;
  if (criteria === 'top') {
    func = AlbumService.getTopAlbumsInfo();
  } else if (criteria === 'new') {
    func = AlbumService.getNewAlbumsInfo();
  } else {
    func = AlbumService.getPicksAlbumsInfo();
  }
  try {
    const res = await func;
    const albums = [];

    res.data.albums.forEach(async (element) => {
      albums.push({
        id: element.id,
        name: element.name,
        trackCount: element.trackCount,

      });
    });
    dispatch(getAlbumsActionCreator(albums));
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default reducer;
