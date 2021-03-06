import axios from 'axios';

const API_KEY = "c7a0834987be3d198bd3023869f08e5a";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url= `${ROOT_URL}?q=${city}&appid=${API_KEY}`;
    const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
 