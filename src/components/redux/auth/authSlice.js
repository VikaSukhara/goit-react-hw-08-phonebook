import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRegister,
  fetchLogIn,
  fetchLogOut,
  fetchCurrent,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchRegister.fulfilled](state, action) {
      //стейт = інішіал стейт
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [fetchLogIn.fulfilled](state, action) {
      //стейт = інішіал стейт
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [fetchLogOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrent.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
