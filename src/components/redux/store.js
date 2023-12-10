import { configureStore } from '@reduxjs/toolkit';
import PhonebookSlice from './contactSlice';

const store = configureStore({
  reducer: {
    contacts: PhonebookSlice,
  },
});

export default store;
