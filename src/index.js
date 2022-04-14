import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './redux/configureStore';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>

  </Provider>,
  document.getElementById('root'),
);
