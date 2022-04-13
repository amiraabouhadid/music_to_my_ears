// import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import albums, {
  albumsLoading, cleanUpActionCreator, getAlbumsActionCreator,
} from './redux/albums/albums';
import tracks, {
  tracksLoading, tracksCleanUpActionCreator, getAlbumTracksActionCreator,
} from './redux/tracks/tracks';
import Welcome from './components/Welcome';
// import App from './App';

const rootReducer = combineReducers({
  albums,
  tracks,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('albums reducer', () => {
  test('should return the initial state', () => {
    expect(albums(undefined, {})).toEqual({
      status: 'idle',
      entities: [],
    });
  });
  test('should change status to loading when albums are being loaded', () => {
    const previousState = {
      status: 'idle',
      entities: [],
    };
    expect(albums(previousState, albumsLoading())).toEqual({
      status: 'loading',
      entities: [],
    });
  });
  test('should add retrieved albums to entities in state and change status back to idle', () => {
    const previousState = {
      status: 'loading',
      entities: [],
    };
    const albumsRetrieved = [{
      id: 1, name: 'album1', trackCount: 2, imageUrl: 'imgURL',
    }];
    expect(albums(previousState, getAlbumsActionCreator(albumsRetrieved))).toEqual({
      status: 'idle',
      entities: [{
        id: 1, name: 'album1', trackCount: 2, imageUrl: 'imgURL',
      }],
    });
  });
  test('should remove albums', () => {
    const previousState = {
      status: 'idle',
      entities: [{
        id: 1, name: 'album1', trackCount: 2, imageUrl: 'imgURL',
      }],
    };

    expect(albums(previousState, cleanUpActionCreator())).toEqual({
      status: 'idle',
      entities: [],
    });
  });
});

describe('tracks reducer', () => {
  test('should return the initial state', () => {
    expect(tracks(undefined, {})).toEqual({
      status: 'idle',
      entities: [],
    });
  });
  test('should change status to loading when tracks are being loaded', () => {
    const previousState = {
      status: 'idle',
      entities: [],
    };
    expect(tracks(previousState, tracksLoading())).toEqual({
      status: 'loading',
      entities: [],
    });
  });
  test('should add retrieved tracks to entities in state and change status back to idle', () => {
    const previousState = {
      status: 'loading',
      entities: [],
    };
    const trackssRetrieved = [{
      id: 1, name: 'track1', playbackSeconds: 200, previewUrl: 'previewURL',
    }];
    expect(tracks(previousState, getAlbumTracksActionCreator(trackssRetrieved))).toEqual({
      status: 'idle',
      entities: [{
        id: 1, name: 'track1', playbackSeconds: 200, previewUrl: 'previewURL',
      }],
    });
  });
  test('should remove tracks', () => {
    const previousState = {
      status: 'idle',
      entities: [{
        id: 1, name: 'track1', playbackSeconds: 200, previewUrl: 'previewURL',
      }],
    };

    expect(tracks(previousState, tracksCleanUpActionCreator())).toEqual({
      status: 'idle',
      entities: [],
    });
  });
});
