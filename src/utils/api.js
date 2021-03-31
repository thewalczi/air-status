import axios from 'axios';

export default axios.create({
    baseURL: `https://airapi.airly.eu/`,
    responseType: "json",
    headers:  {
      'Accept': 'application/json',
      'apikey': 'LRcj98O92YMg6P5NrHZwZKDC3U5HtHpU'
    }
  });