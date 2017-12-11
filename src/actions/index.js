import axios from 'axios';

const API_KEY = '0227e628fa5d30ee53630777745c0b6c';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creators always always always return a type and optionally a payload property for any data
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}