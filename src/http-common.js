import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.napster.com/v2.2/albums',
});
