export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE = "DELETE";
export const LIST_JOBS = "LIST_JOBS";

export const deleteJob = (data) => {
  return (
    dispatch
    // getState
  ) => {
    dispatch({
      type: DELETE,
      payload: data,
    });
  };
};

export const addJob = (data) => {
  return (
    dispatch
    // getState
  ) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: data,
    });
  };
};

export const fetchJobsSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: LIST_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
