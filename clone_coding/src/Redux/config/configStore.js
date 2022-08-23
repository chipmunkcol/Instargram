//https://jdh3340.shop/api/user/posts
import { configureStore } from '@reduxjs/toolkit';
import { tokenSlice } from "../modules/AccessToken"
import { postSlice } from '../modules/postSlice'
import { commentSlice } from '../modules/comment';
import { usersSlice } from '../modules/loginSlice'
import { signupSlice } from '../modules/registerSlice'
import { detailSlice } from '../modules/detailSlice'


 const store = configureStore(
  {
    reducer: {
      accessToken: tokenSlice.reducer,
      users: usersSlice.reducer,
      register: signupSlice.reducer,

      post: postSlice.reducer,
      detail: detailSlice.reducer,
      comments: commentSlice.reducer,
      
    },
    
  },
  
);

export default store;