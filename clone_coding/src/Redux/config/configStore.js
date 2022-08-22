
import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../modules/pracSlice'
import { tokenSlice } from "../modules/AccessToken"
import { postSlice } from '../modules/postSlice'



 const store = configureStore(
  {
    reducer: {
      product: productSlice.reducer,
      accessToken: tokenSlice.reducer,
      post: postSlice.reducer
    },
  },
);

export default store;