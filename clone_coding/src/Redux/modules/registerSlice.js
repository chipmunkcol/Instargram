import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __postsignup = createAsyncThunk(
  'signup/postsignup',
  async (payload, thunkAPI) => {
    try {
        console.log(payload)
        const data = await axios.post('https://jdh3340.shop/api/user/register', payload)
        
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    signup: [],
  },
  reducers: {},
  extraReducers: {},
});