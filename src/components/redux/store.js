import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './contactSlice';

const store = configureStore({
  reducer: {
    contact: phonebookReducer,
  },
});

export default store;
