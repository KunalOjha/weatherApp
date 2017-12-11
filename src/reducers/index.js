// rootReducer is where all of our reducers formulate the whole application state

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
