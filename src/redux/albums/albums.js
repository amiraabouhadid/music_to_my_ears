import AlbumService from '../../services/AlbumService';

const ALBUMS_RETRIEVED = 'app/albums/ALBUMS_RETRIEVED';
const ALBUMS_REMOVED = 'app/albums/ALBUMS_REMOVED';
const ALBUMS_LOADING = 'app/albums/ALBUMS_LOADING';

const initialState = {
  status: 'idle',
  entities: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALBUMS_LOADING:
      return { ...state, status: 'loading' };
    case ALBUMS_RETRIEVED:
      return { ...state, status: 'idle', entities: payload };
    case ALBUMS_REMOVED:
      return { ...state, entities: [] };
    default:
      return state;
  }
};
export const getAlbumsActionCreator = (albums) => ({
  type: ALBUMS_RETRIEVED,
  payload: albums,
});

const getAlbumsData = async (data) => {
  const albums = [];
  data.forEach(async (element) => {
    const imgRes = await AlbumService.getAlbumImage(element.id);
    const imgUrl = imgRes.data.images[0].url;
    albums.push({
      id: element.id,
      name: element.name,
      trackCount: element.trackCount,
      imageUrl: imgUrl,
    });
  });
  return albums;
};
export const cleanUpActionCreator = () => ({
  type: ALBUMS_REMOVED,
});
export const cleanUp = () => async (dispatch) => {
  dispatch(cleanUpActionCreator());
};
export const albumsLoading = () => ({ type: ALBUMS_LOADING });
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
    const data = res.data.albums;
    // add basic info

    const albums = await getAlbumsData(data);
    dispatch(albumsLoading());
    setTimeout(async () => {
      dispatch(getAlbumsActionCreator(albums));
    }, 2000);

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default reducer;
