import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, toggleCompleted } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    filter: '',
    error: null,
    isLoading: false,
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        handleFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                item => item.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
        [toggleCompleted.pending]: handlePending,
        [toggleCompleted.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                item => item.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [toggleCompleted.rejected]: handleRejected,
    },
});

// const state = {
//     contacts: [],
//     filter: '',
// };

// const slice = createSlice({
//     name: 'contacts',
//     initialState: state,
//     reducers: {
//         addContact(state, action) {
//             state.contacts.push(action.payload)
//         },
//         delContact(state, action) {
//             state.contacts = state.action.filter(contact => contact.id !== action.payload)
//         },
//         setFilter(state, action) {
//             state.filter = action.payload
//         },
//     },
// });

// export const { addContact, delContact, setFilter } = slice.actions;
export const { handleFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;