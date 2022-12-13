import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContact');
export const delContact = createAction('contacts/delContact');
export const setFilter = createAction('contacts/setFilter');