//https://jdh3340.shop/api/user/posts/1
import { configureStore } from '@reduxjs/toolkit';
import { tokenSlice } from "../modules/AccessToken"
import { postSlice } from '../modules/postSlice'
import { commentSlice } from '../modules/comment';



 const store = configureStore(
  {
    reducer: {
      accessToken: tokenSlice.reducer,
      post: postSlice.reducer,
      comments: commentSlice.reducer,
      
    },
  },
);

export default store;