import { createSlice } from '@reduxjs/toolkit';
import { register, userlogin, logOut, getCurrent } from './authOps';
import { IUserState } from '../types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: IUserState = {
  profile: { email: '', name: '' },
  token: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state: IUserState, { payload }) => {
        state.profile.email = payload.user.email;
        state.profile.name = payload.user.name;
        state.token = payload!.token;
      })
      .addCase(userlogin.fulfilled, (state: IUserState, { payload }) => {
        state.profile.email = payload.user.email;
        state.profile.name = payload.user.name;
        state.token = payload.token;
      })
      .addCase(getCurrent.fulfilled, (state: IUserState, { payload }) => {
        state.profile.email = payload!.email;
        state.profile.name = payload!.name;
      })
      .addCase(logOut.fulfilled, () => initialState);
  },
});

const persistUserConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
