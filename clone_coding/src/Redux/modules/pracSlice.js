import { async } from '@firebase/util';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
  import axios from 'axios';
  
  //Main 상품들
  export const __getProducts = createAsyncThunk(
    'getProducts',
    async (payload, thunkAPI) => {
      try {
        const data = await axios.get('http://54.180.122.99/api/products');
        return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const __postProducts = createAsyncThunk(
    'PostProducs',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post('http://localhost:3001/products', payload)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )
  
  export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [__getProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [__getProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      },
      [__getProducts.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
    },
  });
  
  //Detail 상품
  export const __getProduct = createAsyncThunk(
    'getProduct',
    async (productId, thunkAPI) => {
      try {
        console.log(productId);
        const data = await axios.get(
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
  
  export const __postProduct = createAsyncThunk(
    'postProduct',
    async (payload, thunkAPI) => {
      try {
        // console.log(usertoken);
        console.log(payload);
        const data = axios.post('http://54.180.122.99/api/product', payload, 
        {
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