import { isRejected } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import { Middleware } from 'redux';
const regExp = {
  userRegFF: 'user/Register/fulfilled',
  userLoginFF: 'user/Login/fulfilled',
  userLogOutFF: 'user/LogOut/fulfilled',

  // userRegRJ: 'user/Register/rejected',
  // userLoginRJ: 'user/Login/rejected',
  // userLogOutRJ: 'user/LogOut/rejected',
};

export const ErrorLogger: Middleware = (_api) => (next) => (action) => {
  console.log(action);

  if (isRejected(action)) {
    toast.error(action.payload);
  }

  if (action.type === regExp.userRegFF || action.type === regExp.userLoginFF)
    toast.success('Welcome!');

  if (action.type === regExp.userLogOutFF) {
    toast.success('Have a nice day!');
  }

  return next(action);
};
