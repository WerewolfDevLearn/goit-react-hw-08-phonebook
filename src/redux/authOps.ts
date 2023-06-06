import { createAsyncThunk } from '@reduxjs/toolkit';
import { userRegister, userLogin, userLogOut, getCurrentUser, token } from '../services/authAxApi';
import { ILogin, IUser, Icredentials, IOCurrentUser } from '../types';
import { RootState } from './store';
import axios, { AxiosError } from 'axios';

export const register = createAsyncThunk<Icredentials, IUser, { rejectValue: string }>(
  'user/Register',
  async function (user, { rejectWithValue }) {
    try {
      const response = await userRegister(user);
      token.set(response.token);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        const errorAxios = error as AxiosError;
        return rejectWithValue(errorAxios.message);
      }
      console.error(error);
    }
  },
);
export const userlogin = createAsyncThunk<Icredentials, ILogin, { rejectValue: string }>(
  'user/Login',
  async function (loginU, { rejectWithValue }) {
    try {
      const response = await userLogin(loginU);
      token.set(response.token);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        const errorAxios = error as AxiosError;
        return rejectWithValue(errorAxios.message);
      }
      console.error(error);
    }
  },
);
export const logOut = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
  'user/LogOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userLogOut();
      token.unset();
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        const errorAxios = error as AxiosError;
        return rejectWithValue(errorAxios.message);
      }
      console.error(error);
    }
  },
);
export const getCurrent = createAsyncThunk<IOCurrentUser, undefined, { rejectValue: string }>(
  'user/GetCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const stateToken = state.user.token;
      console.log('stateToken: ', stateToken);
      if (!stateToken) return;

      const credentials = await getCurrentUser(stateToken);
      console.log('credentials: ', credentials);

      return credentials;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        const errorAxios = error as AxiosError;
        return rejectWithValue(errorAxios.message);
      }
      console.error(error);
    }
  },
);
