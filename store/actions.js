import { INCREMENT } from "./actionTypes";

export const setIncrement = () => (dispatch) => {
    console.log('here')
    dispatch({
      type: INCREMENT,
      payload: 2,
    });
  };
  
