import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/Cart";
import productsReducer from "../slices/Products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
