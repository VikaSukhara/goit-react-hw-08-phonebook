import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchRegister = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      console.log("success fetch register")
      console.log("credentials", credentials)
      const response = await axios.post('/users/signup', credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log("fail fetch register")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log("state", state)
    const savededToken = state.auth.token;
      console.log("savededToken", savededToken)
    if (savededToken === null) {
      return thunkAPI.rejectWithValue('Please Log in or Sign up');
    }
    try {
      setAuthHeader(savededToken);
      const response = await axios.get('/users/current');
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
