import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [{
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
    rate: "",
    count: "",
  }],
};

export const productReducer = (state = initialState, { types, payload }) => {
  switch (types) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state={}, { types, payload }) => {
  switch (types) {
    case ActionTypes.SELETED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {}
    default:
      return state;
  }
};
