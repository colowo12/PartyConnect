import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import axios from "axios";

const LOAD_LOCATIONS = "LOAD_LOCATIONS";
const ADD_USER = "ADD_USER";
const GET_SINGLE_LOCATION = "GET_SINGLE_LOCATION";

const loadLocations = (locations) => ({
  type: LOAD_DATA,
  locations,
});

export const loadedLocations = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api");
    dispatch(loadLocations(data));
  };
};

const getSingleLocation = (location) => ({
  type: LOAD_DATA,
  location,
});

export const gotSingleLocation = (id) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/${id}`);
    dispatch(getSingleLocation(data));
  };
};

const initialState = {
  locations: [],
  singleLocation: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LOCATIONS:
      return { ...state, locations: action.locations };
    case GET_SINGLE_LOCATION:
      return { ...state, singleLocation: action.location };
    default:
      return state;
  }
}

export default store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);
