import _ from "lodash";
import avito from "../apis/avito";

// export const fetchProductsAndSellers = () => async (dispatch, getState) => {
//   await dispatch(fetchProducts());
//   console.log(getState().products);

//   _.chain(getState().products)
//     .map("sellerId")
//     .uniq()
//     .forEach(id => dispatch(fetchSeller(id)))
//     .value();
// };

export const fetchProducts = () => async dispatch => {
  const response = await avito.get("/products");
  dispatch({ type: "FETCH_PRODUCTS", payload: response.data.data });
};

export const fetchSeller = id => async dispatch => {
  const response = await avito.get(`/sellers/${id}`);
  dispatch({ type: "FETCH_SELLER", payload: response.data.data });
};
