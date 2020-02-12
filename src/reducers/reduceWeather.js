import { FETCH_WEATHER } from "../actions/index";

// Setting the state to an empty array, the action will return the payload data?
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
  // return state;
};
