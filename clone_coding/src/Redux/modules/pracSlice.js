import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
  

// 쿠키에서 토큰 가져오기
// import { getCookieToken } from '../../shared/cookie';
//   const usertoken = getCookieToken();
  
  //Detail 상품
  export const __getProduct = createAsyncThunk(
    'getProduct',
    async (productId, thunkAPI) => {
      try {
        console.log(productId);
        const data = await axios.get(`http://54.180.122.99/api/product/${productId}`,
        //   { headers: { authorization: usertoken } }
        );
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const __postProduct = createAsyncThunk(
    'postProduct',
    async (payload, thunkAPI) => {
      try {
        // console.log(usertoken);
        console.log(payload);
        const data = axios.post('http://54.180.122.99/api/product', payload, {
        //   headers: { authorization: usertoken },
        });
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const __deleteProduct = createAsyncThunk(
    'deleteProduct',
    async (productId, thunkAPI) => {
      try {
        const data = axios.delete(
          `http://54.180.122.99/api/product/${productId}`,
          {
            // headers: { authorization: usertoken },
          }
        );
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const productSlice = createSlice({
    name: 'product',
    initialState: {
      product: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [__getProduct.pending]: (state) => {
        state.isLoading = true;
      },
      [__getProduct.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      },
      [__getProduct.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
    },
  });