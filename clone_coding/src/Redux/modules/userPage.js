import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getCookieToken } from '../../shared/cookie';

const myToken = getCookieToken();

export const __getUserPage = createAsyncThunk(
    'userPage/getUserPage',
    async (username, thunkAPI) => {
        try {
            console.log(username)
            const data = await axios.post(`https://jdh3340.shop/api/user/${username}/posts`,
            { headers: {Authorization: myToken} })
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
// export const __postComment = createAsyncThunk(
//     'comment/postComment',
//     async (payload, thunkAPI) => {
//         try {
//             console.log(payload)
//             console.log(usertoken)
//             const data = await axios.post(`http://54.180.122.99/api/comments/${payload.productId}`, {content: payload.comment}, {
//                 headers: {Authorization: usertoken}})
//             return thunkAPI.fulfillWithValue(data.data)
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error)
//         }
//     }
// )
// export const __deleteComment = createAsyncThunk(
//     'comment/deleteComment',
//     async (commentId, thunkAPI) => {
//         try {
//             console.log(commentId)
//             const data = await axios.delete(`http://54.180.122.99/api/comments/${commentId}`, {
//                 headers: {Authorization: usertoken}})
//             return thunkAPI.fulfillWithValue(data.data)
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error)
//         }
//     }
// )




export const userPageSlice = createSlice({
    name: 'detail',
    initialState:{
        userPage: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getUserPage.pending]: (state) => {
            state.isLoading = true;
        },
        [__getUserPage.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userPage = action.payload;
        },
        [__getUserPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})