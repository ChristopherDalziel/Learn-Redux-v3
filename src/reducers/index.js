import { combineReducers } from "redux";
import WeatherReducer from "./reduceWeather";

// Combining our reducers in one place
const rootReducer = combineReducers({
  // Setting the name of 'Weather" and attaching it to our reducer
  weather: WeatherReducer
});

export default rootReducer;
