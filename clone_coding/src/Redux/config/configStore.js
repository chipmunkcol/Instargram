
import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../modules/pracSlice'

export const store = configureStore(
  {
    reducer: {
    //   products: productsSlice.reducer,
      product: productSlice.reducer,
    },
  },
);

export default store;