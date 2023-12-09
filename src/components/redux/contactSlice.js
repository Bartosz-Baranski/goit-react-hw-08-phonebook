import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchContacts, saveContact, deleteContact } from './operations';

const phonebookSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(saveContact.fulfilled, (state, action) => {
        const newContact = action.payload;
        const existedContact = state.some(
          contact =>
            contact.name === newContact.name &&
            contact.number === newContact.number
        );
        if (existedContact) {
          Notify.warning('This contact already exists');
        } else {
          state.push({ ...newContact, id: nanoid() });
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactId = action.payload;
        return state.filter(contact => contact.id !== contactId);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default phonebookSlice.reducer;
