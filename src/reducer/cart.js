// eslint-disable
export function cart(state = { items: [] }, action) {
  if (action.type == 'ADD_ITEM') {
    console.log(action.payload);
    state.items.unshift(action.payload);
    return {
      ...state,
      // items: [action.payload, ...items],
    };
  }
  if (action.type == 'REMOVE') {
    console.log(action.payload);

    return {
      ...state,
      items: state.items.filter((item) => item.product.id != action.payload),
    };
  }

  return state;
}
