import { DELETE, ADD_TO_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE:
      return {
        ...state,
        content: state.content.filter((j) => j._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
