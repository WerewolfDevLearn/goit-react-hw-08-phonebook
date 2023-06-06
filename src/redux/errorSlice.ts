import { createSlice } from '@reduxjs/toolkit';
import { register, userlogin, logOut, getCurrent } from './authOps';

const initialState = '';
// const errorHandler = (state: string, action: PayloadAction<string, string>) => {
//   state = payload;
// };

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.rejected, (_, { payload }) => payload)
      .addCase(userlogin.rejected, (_, { payload }) => payload)
      .addCase(logOut.rejected, (_, { payload }) => payload)
      .addCase(getCurrent.rejected, (_, { payload }) => payload);
  },
});

export const errorReducer = errorSlice.reducer;
