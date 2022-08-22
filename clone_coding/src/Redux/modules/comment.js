import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const __getComment = createAsyncThunk(
    'comment/getComment',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3001/comment')
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comment: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getComment.pending]: (state) => {
            state.isLoading = true;
        },
        [__getComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comment = action.payload;
        },
        [__getComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})