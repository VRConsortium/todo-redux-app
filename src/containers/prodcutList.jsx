import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productAction";

const Productlisting = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error: " + err));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products" +products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default Productlisting;
