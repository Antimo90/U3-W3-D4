import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobsReducer from "../reducers/jobsReducer";

const mainReducer = combineReducers({
  content: favouriteReducer,
  jobsSearch: jobsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
