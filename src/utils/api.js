import axios from 'axios';

export default axios.create({
    baseURL: `https://airapi.airly.eu/`,
    responseType: "json",
    headers:  {
      'Accept': 'application/json',
      'apikey': '' //Add your API Key
    }
  });