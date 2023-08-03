import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
} from "../reducers/productReducer";
import "semantic-ui-css/semantic.min.css";

const reducer = combineReducers({
  allProducts: productReducer,
  selectedProducts: selectedProductReducer,
});

export default reducer;
