import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";
import { cartReducer } from "./cart/cart.slice";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type TypeRootState = ReturnType<typeof store.getState>;
