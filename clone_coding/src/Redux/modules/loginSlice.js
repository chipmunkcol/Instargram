import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAccessToken, setUserData } from '../../shared/cookie';


export const __loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('https://jdh3340.shop/login', payload)
        .then((response) => {
          console.log(response);
          setAccessToken(response.headers.authorization);
          setUserData(response.data);
          console.log(setUserData)
          axios.defaults.headers['Authorization'] = `${response.headers.authorization}`;
          
          // document.location.href = '/';
          return thunkAPI.fulfillWithValue(response.data)
        });
      ;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userinfo = action.payload;
      // console.log('username: ' + action.payload.username);
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.response.data.error.message);
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;