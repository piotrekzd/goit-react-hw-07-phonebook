import { createSlice } from "@reduxjs/toolkit";

const state = {
    contacts: [],
    filter: '',
};

const slice = createSlice({
    name: 'contacts',
    initialState: state,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        delContact(state, action) {
            state.contacts = state.action.filter(contact => contact.id !== action.payload)
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
    },
});

export const { addContact, delContact, setFilter } = slice.actions;
export const contactReducer = slice.reducer;