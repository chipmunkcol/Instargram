import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getCookieToken } from '../../shared/cookie';

const myToken = getCookieToken();

export const __patchEditProfile = createAsyncThunk(
    'editProfile/patchEditProfile',
    async (paylaod, thunkAPI) => {
        console.log(paylaod)
        try {
            const data = await axios.patch('https://jdh3340.shop/api/user/profile', paylaod,
            { headers: {Authorization: myToken} })
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const editProfileSlice = createSlice({
    name: 'editProfile',
    initialState:{
        editProfile: [],
    },
    reducers: {},
    extraReducers: {}
})