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
    [fetchRegister.pending](state) {},
    [fetchLogIn.pending](state) {},
    [fetchLogOut.pending](state) {},
    [fetchCurrent.pending](state) {
      state.isRefreshing = true;
    },


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
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrent.rejected] (state) {
      state.isRefreshing = false;
    },
  },

});

export const authReducer = authSlice.reducer;
