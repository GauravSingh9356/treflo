import * as api from '../api';

export const sendToCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_ITEM', payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'REMOVE', payload: id });
  } catch (error) {
    console.log(error);
  }
};
