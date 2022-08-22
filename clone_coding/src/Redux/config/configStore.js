import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../modules/pracSlice'
import { postSlice } from '../modules/postSlice'
 const store = configureStore(
  {
    reducer: {
      product: productSlice.reducer,
      post: postSlice.reducer
    },
  },
);

export default store;