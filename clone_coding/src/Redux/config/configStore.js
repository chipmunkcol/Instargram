
import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../modules/pracSlice'
import { tokenSlice } from "../modules/AccessToken"

export const store = configureStore(
  {
    reducer: {
    //   products: productsSlice.reducer,
      product: productSlice.reducer,
      accessToken: tokenSlice.reducer,
    },
  },
);

export default store;