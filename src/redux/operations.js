import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6399030b29930e2bb3c7c076.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            // console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };  
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);

export const toggleCompleted = createAsyncThunk('contacts/toggleCompleted',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.put(`/contacts/${contact.id}`, {
                completed: !contact.completed,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);