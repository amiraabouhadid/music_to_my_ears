// Mocked Functions
import {
  BrowserRouter as Router, Route, useLocation,
} from 'react-router-dom';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),

}));

const setUpPageRender = (location) => {
  useLocation.mockReturnValue(location);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  return (component) => render(
    <Router>
      <Route component={component} />
    </Router>,
  );
};
export default setUpPageRender;
