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
        
    }
})