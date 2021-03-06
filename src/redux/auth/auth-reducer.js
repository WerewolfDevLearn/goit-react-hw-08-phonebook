import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSeccess,
  loginSeccess,
  logoutSeccess,
  getCurrentUserSeccess,
  loginError,
  registerError,
  getCurrentUserError,
  getCurrentUserRequest,
} from './auth-action';

const initailState = { name: null, email: null };

const user = createReducer(initailState, {
  [registerSeccess]: (_, action) => action.payload.user,
  [loginSeccess]: (_, action) => action.payload.user,
  [logoutSeccess]: () => initailState,
  [getCurrentUserSeccess]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [registerSeccess]: (_, action) => action.payload.token,
  [loginSeccess]: (_, action) => action.payload.token,
  [logoutSeccess]: (_, action) => null,
});

const isLogged = createReducer(false, {
  [registerSeccess]: () => true,
  [loginSeccess]: () => true,
  [getCurrentUserSeccess]: () => true,
  [getCurrentUserError]: () => false,
  [loginError]: () => false,
  [registerError]: () => false,
  [logoutSeccess]: () => false,
});

const refreshingUser = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserError]: () => false,
  [getCurrentUserSeccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogged,
  refreshingUser,
});
