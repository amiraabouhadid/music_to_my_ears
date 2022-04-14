// import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
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
import Home from './components/Home';
import TracksHeader from './components/TracksHeader';
import TracksList from './components/TracksList';

const rootReducer = combineReducers({
  albums,
  tracks,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
describe('Welcome', () => {
  test('welcome page renders correctly', () => {
    const welcomePage = renderer.create(
      <Provider store={Store}>
        <Router>
          <Welcome />
        </Router>

      </Provider>,
    ).toJSON();
    expect(welcomePage).toMatchSnapshot();
  });
});
describe('Home', () => {
  test('home page renders correctly', () => {
    const homePage = renderer.create(
      <Provider store={Store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    ).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
describe('Tracks ', () => {
  test('tracks page header renders correctly', () => {
    const albumProp = {
      id: 1, name: 'album1', trackCount: 2, imageUrl: 'imgURL',
    };
    const tracksHeader = renderer.create(
      <Provider store={Store}>
        <Router>
          <TracksHeader album={albumProp} />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tracksHeader).toMatchSnapshot();
  });
  test('tracks list renders correctly', () => {
    const tracksProp = [{
      id: 1, name: 'track1', playbackSeconds: 200, previewUrl: 'previewURL',
    }];
    const tracksList = renderer.create(
      <Provider store={Store}>
        <Router>
          <TracksList tracks={tracksProp} loadingStatus="idle" />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tracksList).toMatchSnapshot();
  });
});

describe('Albums Reducer', () => {
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

describe('Tracks Reducer', () => {
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
