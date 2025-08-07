import { LIST_JOBS } from "../actions";

const initialState = {
  jobsSearch: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_JOBS:
      return {
        ...state,
        jobsSearch: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
