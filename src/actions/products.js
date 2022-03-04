import * as api from '../api';

export const getProducts = () => async (dispatch) => {
  try {
    // console.log('hello');
    const { data } = await api.fetchProducts();
    // console.log(data);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilter = (filter) => async (dispatch) => {
  try {
    if (filter == 'Rating') {
      console.log('in rating');
      dispatch({ type: 'FILTER', payload: 'rating' });
    } else if (filter == 'Price') {
      console.log('in price');
      dispatch({ type: 'FILTER', payload: 'price' });
    }
  } catch (error) {
    console.log(error);
  }
};
