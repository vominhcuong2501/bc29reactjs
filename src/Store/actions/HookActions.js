import { SET_DISTRICTS, SET_PROVINCES } from "../types/Hook";
import axios from "axios";

const setProvincesAction = () => {

  // redux Thunk khi dispatch nhận vào cái function/ còn redux bth nhận vào object
  return async (dispatch) => {
    const result = await axios.get(
      "https://613cb968270b96001798b246.mockapi.io/provinces"
    );

    dispatch({
      type: SET_PROVINCES,
      payload: result.data,
    });
  };
};

const setDistrictsAction = () => {
  return async (dispatch) => {
    const result = await axios.get(
      "https://613cb968270b96001798b246.mockapi.io/districts"
    );
    dispatch({
      type: SET_DISTRICTS,
      payload: result.data,
    });
  };
};
export { setDistrictsAction, setProvincesAction };
