import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6399030b29930e2bb3c7c076.mockapi.io'

const fetch = createAsyncThunk('contacts/fetchALl',
    async (name, phone, thunkAPI) => {
        try {
            const response = await axios.get('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);

