import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../modules/pracSlice'

 const store = configureStore(
  {
    reducer: {
    //   products: productsSlice.reducer,
      product: productSlice.reducer,
    },
  },
);

export default store;