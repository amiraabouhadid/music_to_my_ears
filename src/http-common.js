import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.napster.com/v2.2/albums',
});
