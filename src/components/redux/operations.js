import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://657452aef941bda3f2af98dd.mockapi.io/contacts/contacts';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts from API:', error);
      throw error;
    }
  }
);

export const saveContact = createAsyncThunk(
  'contact/saveContact',
  async contact => {
    try {
      const response = await axios.post(API_URL, contact);
      return response.data;
    } catch (error) {
      console.error('Error saving contact to API:', error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async contactId => {
    try {
      await axios.delete(`${API_URL}/${contactId}`);
      return contactId;
    } catch (error) {
      console.error('Error deleting contact from API:', error);
      throw error;
    }
  }
);
