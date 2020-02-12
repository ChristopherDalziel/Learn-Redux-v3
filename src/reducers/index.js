import { combineReducers } from "redux";
import WeatherReducer from "./reduceWeather";

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
