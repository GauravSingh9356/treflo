// eslint-disable-next-line
export function products(state = { products: [] }, action) {
  if (action.type == 'FETCH_ALL') {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type == 'FILTER') {
    const filter = action.payload;
    switch (filter) {
      case 'price':
        console.log('HERE');
        return {
          ...state,
          products: state.products.sort((a, b) => b.price - a.price),
        };
        break;
      case 'rating':
        return {
          ...state,
          products: state.products.sort((a, b) => a.rating - b.rating),
        };
        break;
    }
  }
  return state;
}
